import styled from 'styled-components'

interface HeaderContainerProps {
  backgroundImgUrl: string
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 18.5rem;
  max-height: 18.5rem;
  overflow: hidden;

  background-image: url(${(props) => props.backgroundImgUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 768px) {
    height: 14.5rem;
    align-items: flex-start;
    img {
      margin-top: 1rem;
    }
  }

  @media (max-width: 375px) {
    height: 12.5rem;
    img {
      width: 8rem;
    }
  }
`
