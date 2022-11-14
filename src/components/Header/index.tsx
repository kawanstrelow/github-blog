import BackgroundImg from '../../assets/coverheader.png'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={BackgroundImg} alt="" />
    </HeaderContainer>
  )
}
