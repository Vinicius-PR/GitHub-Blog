import { formatDistanceToNow, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { PostProps } from '../../pages/Home'
import { PostContainer, PostText, PostTitle } from './styles'

interface PostCardProps {
  post: PostProps
}

export function PostCard({ post }: PostCardProps) {
  const dateObj = new Date(post.created_at)
  const timeDistance = formatDistanceToNow(dateObj, {
    locale: ptBR,
  })
  const CreatedDateFormated = format(dateObj, 'dd/MM/yyyy', {
    locale: ptBR,
  })
  return (
    <PostContainer to={`/${post.number}`}>
      <PostTitle>
        <h2>{post.title}</h2>
        <span title={CreatedDateFormated}>{timeDistance}</span>
      </PostTitle>

      <PostText>
        {post.body
          .replace(/[#*+-]/g, '')
          .split(' ')
          .slice(0, 50)
          .join(' ') + ' ...'}
      </PostText>
    </PostContainer>
  )
}
