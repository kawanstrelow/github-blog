import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalendarDay,
  faComment,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import { GithubLogo } from 'phosphor-react'

import {
  BaseboardIcons,
  HeaderInfo,
  HeaderLinks,
  PostContainer,
} from './styles'

export function Posts() {
  return (
    <PostContainer>
      <HeaderInfo>
        <HeaderLinks>
          <a>
            <FontAwesomeIcon icon={faChevronLeft} size="xs" />
            <span>VOLTAR</span>
          </a>
          <a>
            <span>VER NO GITHUB</span>
            Icon Github
          </a>
        </HeaderLinks>
        <h2>JavaScript data types and data structures</h2>
        <BaseboardIcons>
          <div>
            <GithubLogo size={18} />
            <span>kawanstrelow</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>Há 1 dia</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>5 comentários</span>
          </div>
        </BaseboardIcons>
      </HeaderInfo>
    </PostContainer>
  )
}
