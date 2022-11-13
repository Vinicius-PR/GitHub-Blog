/* eslint-disable camelcase */
import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { api } from '../../lib/axios'
import {
  HeaderLinks,
  PostBody,
  PostHeader,
  PostInfo,
  PostPageContainer,
  PostTitle,
} from './styles'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faArrowUpRightFromSquare,
  faCode,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import ReactMarkdown from 'react-markdown'

interface PostProps {
  title: string
  userName: string
  timeDistance: string
  commentsCount: number
  body: string
  issueLink: string
  dateFormated: string
}

export function PostPage() {
  const { number } = useParams()
  const [post, setPost] = useState<PostProps>()

  async function fetchActualPost(number: any) {
    const response = await api.get(
      `/repos/Vinicius-PR/Challenge-03-Ignite-2022-GitHub-Blog/issues/${number}`,
    )
    const { title, created_at, comments, body, html_url } = response.data
    const { login } = response.data.user
    const dateObj = new Date(created_at)
    const dateDistanceFormated = formatDistanceToNow(dateObj, {
      locale: ptBR,
      addSuffix: true,
    })
    const dateFormated = format(dateObj, 'dd/MM/yyyy', {
      locale: ptBR,
    })
    const postData: PostProps = {
      title,
      userName: login,
      timeDistance: dateDistanceFormated,
      commentsCount: comments,
      body,
      issueLink: html_url,
      dateFormated,
    }
    setPost(postData)
  }

  useEffect(() => {
    fetchActualPost(number)
  }, [number])

  return (
    <PostPageContainer>
      <PostHeader>
        <HeaderLinks>
          <NavLink to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            VOLTAR
          </NavLink>

          <a href={post?.issueLink} target="_blank" rel="noreferrer">
            VER NO GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </HeaderLinks>

        <PostTitle>{post?.title}</PostTitle>

        <PostInfo>
          <div>
            <FontAwesomeIcon icon={faCode} />
            <span>{post?.userName}</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span title={post?.dateFormated}>{post?.timeDistance}</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>{post?.commentsCount} Comentários</span>
          </div>
        </PostInfo>
      </PostHeader>
      <PostBody>
        <ReactMarkdown>{String(post?.body)}</ReactMarkdown>
      </PostBody>
    </PostPageContainer>
  )
}
