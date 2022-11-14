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

export function Home() {
  return (
    <HomeContainer>
      <AvatarInfo>
        <img src="https://github.com/kawanstrelow.png" alt="" />
        <AvatarTextInfo>
          <TopTextInfo>
            <HeaderTextInfo>
              <h1>Kawan Strelow</h1>
              <a href="#">
                <GithubLink>
                  <span>GITHUB</span>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </GithubLink>
              </a>
            </HeaderTextInfo>
            <p>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
              viverra massa quam dignissim aenean malesuada suscipit. Nunc,
              volutpat pulvinar vel mass.
            </p>
          </TopTextInfo>

          <BaseboardIcons>
            <div>
              <GithubLogo size={18} />
              <span>kawanstrelow</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faBuilding} />
              <span>Salm</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>32 seguidores</span>
            </div>
          </BaseboardIcons>
        </AvatarTextInfo>
      </AvatarInfo>
      <PublicationsInfo>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </PublicationsInfo>
      <InputSearch type="text" placeholder="Buscar conteúdo" />
      <PostsContainer>
        <Post />
        <Post />
        <Post />
      </PostsContainer>
    </HomeContainer>
  )
}
