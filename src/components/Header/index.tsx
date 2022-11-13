import { HeaderContainer } from './styles'
import logoImg from '../../assets/logo.svg'
import backgroundImg from '../../assets/background-header.jpg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer backgroundImgUrl={backgroundImg}>
      <NavLink to="/" end>
        <img src={logoImg} alt="" />
      </NavLink>
    </HeaderContainer>
  )
}
