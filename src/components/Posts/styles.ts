import styled from 'styled-components'

export const PostsContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`
