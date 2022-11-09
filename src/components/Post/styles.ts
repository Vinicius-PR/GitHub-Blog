import styled from 'styled-components'

export const PostContainer = styled.div`
  padding: 2rem;
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

export const PostTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.25rem;

  h2 {
    flex: 1;
    color: ${(props) => props.theme['base-title']};
    font-size: 1.25rem;
  }

  span {
    color: ${(props) => props.theme['base-span']};
  }
`

export const PostText = styled.p`
  color: ${(props) => props.theme['base-text']};
  line-height: 1.6;
  font-size: 1rem;
`
