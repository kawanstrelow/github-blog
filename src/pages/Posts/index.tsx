import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalendarDay,
  faComment,
  faChevronLeft,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'

import { GithubLogo } from 'phosphor-react'

import {
  BaseboardIcons,
  BodyInfo,
  HeaderInfo,
  HeaderLinks,
  PostContainer,
} from './styles'

import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

import ReactMarkdown from 'react-markdown'

import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface PostProps {
  title: string
  user: UserPostProps
  created_at: Date
  comments: string
  body: string
  html_url: string
}

interface UserPostProps {
  login: string
}

const PostInitial = {
  title: '',
  user: { login: '' },
  created_at: new Date(),
  comments: '',
  body: '',
  html_url: '',
}

export function Posts() {
  const [postData, setPostData] = useState<PostProps>(PostInitial)
  const { issueId } = useParams()
  const navigate = useNavigate()

  function getInfoIssue() {
    axios
      .get(
        `https://api.github.com/repos/kawanstrelow/github-blog/issues/${issueId}`
      )
      .then(issueData => setPostData(issueData.data))
  }

  function handleGoBack() {
    navigate('/')
  }

  useEffect(() => {
    getInfoIssue()
  }, [])

  return (
    <PostContainer>
      <HeaderInfo>
        <HeaderLinks>
          <a onClick={handleGoBack}>
            <FontAwesomeIcon icon={faChevronLeft} size="xs" />
            <span>VOLTAR</span>
          </a>
          <a href={postData.html_url}>
            <span>VER NO GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </HeaderLinks>
        <h2>{postData.title}</h2>
        <BaseboardIcons>
          <div>
            <GithubLogo size={18} />
            <span>{postData.user.login}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>
              {formatDistanceToNow(new Date(postData.created_at), {
                addSuffix: true,
                locale: ptBR,
              })}
            </span>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>{postData.comments}</span>
          </div>
        </BaseboardIcons>
      </HeaderInfo>
      <BodyInfo>
        <ReactMarkdown children={postData.body} />
      </BodyInfo>
    </PostContainer>
  )
}
