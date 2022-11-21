import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useNavigate } from 'react-router-dom'
import { HeaderText, PostContainer } from './styles'

interface PostProps {
  handleChangePage: (number: number) => void
  number: number
  url: string
  title: string
  body: string
  created_at: string
}

export function Post({
  handleChangePage,
  number,
  url,
  title,
  body,
  created_at,
}: PostProps) {
  return (
    <PostContainer onClick={() => handleChangePage(number)}>
      <HeaderText>
        <h1>{title}</h1>
        <span>
          {formatDistanceToNow(new Date(created_at), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </HeaderText>
      <p>{body}</p>
    </PostContainer>
  )
}
