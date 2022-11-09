import styled from 'styled-components'

export const ProfileContainer = styled.div`
  background-color: ${(props) => props.theme['base-profile']};
  display: flex;
  padding: 2rem;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 425px) {
    padding: 1rem;
  }
`

export const ImageContainer = styled.div`
  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`

export const ProfileContent = styled.div`
  margin-left: 2rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 700px) {
    margin-left: 0;
  }
`

export const ProfileTitle = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
  }

  a {
    color: ${(props) => props.theme.blue};
    text-decoration: none;
  }

  svg {
    color: ${(props) => props.theme.blue};
    margin-left: 0.5rem;
  }
`

export const ProfileText = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`

export const ProfileInfo = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;

  div {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    svg {
      color: ${(props) => props.theme['base-label']};
    }

    p {
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`
