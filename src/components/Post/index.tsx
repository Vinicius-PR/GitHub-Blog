import { PostContainer, PostText, PostTitle } from './styles'

export function Post() {
  return (
    <PostContainer>
      <PostTitle>
        <h2>JavaScript data types and data structures</h2>
        <span>Há 1 dia</span>
      </PostTitle>

      <PostText>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in
      </PostText>
    </PostContainer>
  )
}
