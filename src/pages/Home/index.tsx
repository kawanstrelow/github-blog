import {
  AvatarInfo,
  AvatarTextInfo,
  BaseboardIcons,
  GithubLink,
  HeaderTextInfo,
  HomeContainer,
  InputSearch,
  PostsContainer,
  PublicationsInfo,
  TopTextInfo,
} from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { GithubLogo } from 'phosphor-react'
import { Post } from './components/Post'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

interface IssueProps {
  id: string
  number: number
  url: string
  title: string
  body: string
  created_at: string
}

interface UserProps {
  avatar_url: string
  name: string
  html_url: string
  bio: string
  login: string
  company: string
  followers: number
}

export function Home() {
  const navigate = useNavigate()

  const [user, setUser] = useState<UserProps>({
    avatar_url: '',
    name: '',
    html_url: '',
    bio: '',
    login: '',
    company: '',
    followers: 0,
  })

  const [issues, setIssues] = useState<IssueProps[]>([])
  const [issuesFiltered, setIssuesFiltered] = useState<IssueProps[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    getUserInfo()
    getIssues()
  }, [])

  useEffect(() => {
    getIssuesFiltered()
  }, [searchTerm, issues])

  function getUserInfo() {
    axios
      .get('https://api.github.com/users/kawanstrelow')
      .then(userData => setUser(userData.data))
  }

  function getIssues() {
    axios
      .get('https://api.github.com/search/issues', {
        params: {
          q: 'repo:kawanstrelow/github-blog',
        },
      })
      .then(issuesData => setIssues(issuesData.data.items))
  }

  function getIssuesFiltered() {
    const newData: IssueProps[] = []

    issues.map(issue => {
      if (
        issue.body.toLowerCase().includes(searchTerm) ||
        issue.title.toLowerCase().includes(searchTerm)
      ) {
        newData.push(issue)
      } else {
        return
      }
    })
    setIssuesFiltered(newData)
  }

  function handleSearchTerm(data: any) {
    const text = data.target.value.toLowerCase()
    setSearchTerm(text)
  }

  function handleGoToPostPage(data: any) {
    navigate(`/${data}`)
  }

  return (
    <HomeContainer>
      <AvatarInfo>
        <img src={user.avatar_url} alt="" />
        <AvatarTextInfo>
          <TopTextInfo>
            <HeaderTextInfo>
              <h1>{user.name}</h1>
              <a href={user.html_url}>
                <GithubLink>
                  <span>GITHUB</span>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </GithubLink>
              </a>
            </HeaderTextInfo>
            <p>{user.bio}</p>
          </TopTextInfo>

          <BaseboardIcons>
            <div>
              <GithubLogo size={18} />
              <span>{user.login}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faBuilding} />
              <span>{user.company}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>{user.followers}</span>
            </div>
          </BaseboardIcons>
        </AvatarTextInfo>
      </AvatarInfo>
      <PublicationsInfo>
        <h3>Publicações</h3>
        <span>{issuesFiltered.length ?? 0} publicações</span>
      </PublicationsInfo>
      <InputSearch
        type="text"
        placeholder="Buscar conteúdo"
        onChange={handleSearchTerm}
      />
      <PostsContainer>
        {issuesFiltered.map(issue => (
          <Post
            handleChangePage={handleGoToPostPage}
            key={issue.id}
            number={issue.number}
            url={issue.url}
            title={issue.title}
            body={issue.body}
            created_at={issue.created_at}
          />
        ))}
      </PostsContainer>
    </HomeContainer>
  )
}
