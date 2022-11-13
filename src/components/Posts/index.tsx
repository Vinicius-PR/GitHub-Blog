import { PostProps } from '../../pages/Home'
import { PostCard } from '../PostCard'
import { NoPosts, PostsContainer } from './styles'

interface PostsProps {
  allPosts: PostProps[]
}

export function Posts({ allPosts }: PostsProps) {
  return (
    <>
      {allPosts.length > 0 ? (
        <PostsContainer>
          {allPosts.map((post) => {
            return <PostCard key={post.number} post={post} />
          })}
        </PostsContainer>
      ) : (
        <NoPosts>Nenhum post encontrado</NoPosts>
      )}
    </>
  )
}
