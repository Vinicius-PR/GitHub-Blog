import { useEffect, useState } from 'react'
import { Form } from '../../components/Form'
import { Posts } from '../../components/Posts'
import { Profile } from '../../components/Profile'
import { api } from '../../lib/axios'
import { HomeContainer } from './styles'

export interface PostProps {
  title: string
  number: number
  created_at: string
  body: string
}

export function Home() {
  const [allPosts, setAllPosts] = useState<PostProps[]>([])

  async function fetchPosts(query = '') {
    const response = await api.get(
      `search/issues?q=${query}repo:Vinicius-PR/Challenge-03-Ignite-2022-GitHub-Blog`,
    )
    const posts: PostProps[] = response.data.items.map((item: PostProps) => {
      return {
        title: item.title,
        number: item.number,
        created_at: item.created_at,
        body: item.body,
      }
    })

    setAllPosts(posts)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <HomeContainer>
      <Profile />
      <Form amountOfPost={allPosts.length} fetchPosts={fetchPosts} />
      <Posts allPosts={allPosts} />
    </HomeContainer>
  )
}
