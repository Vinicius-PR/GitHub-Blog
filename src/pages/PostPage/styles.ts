import styled from 'styled-components'

export const PostPageContainer = styled.div``

export const PostHeader = styled.div`
  background-color: ${(props) => props.theme['base-profile']};
  min-height: 10.5rem;
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  border-radius: 10px;

  @media (max-width: 425px) {
    padding: 1rem;
  }
`

export const HeaderLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  a {
    display: flex;
    gap: 0.5rem;
    text-decoration: none;
    align-items: center;
    font-size: 0.75rem;
    font-weight: 700;
  }
  a,
  svg {
    color: ${(props) => props.theme.blue};
  }
`

export const PostTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => props.theme['base-title']};
  margin: 1.25rem 0 0.5rem;
`

export const PostInfo = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;

  div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    span,
    svg {
      color: ${(props) => props.theme['base-span']};
    }
  }
`
export const PostBody = styled.div`
  padding: 2.5rem 2rem;
  P,
  h1,
  h2,
  h3,
  h4,
  h5,
  code {
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 1.5rem;
  }

  a {
    color: ${(props) => props.theme.blue};
  }

  code {
    background: #112131;
    font-weight: 400;
    font-size: 1rem;
    display: flex;
    padding: 1rem;
    overflow-x: scroll;
  }

  @media (max-width: 425px) {
    padding: 2rem 1rem;
  }
`
