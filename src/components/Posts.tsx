'use client'

import { getAllPosts } from '@/services/getPosts'
import Link from 'next/link'
import useSWR from 'swr'

const Posts = () => {
  const { data: posts, isLoading: loading } = useSWR('posts', getAllPosts)
  // const [posts, loading, getAllPosts] = usePosts(
  //   (state) => [state.posts, state.loading, state.getAllPosts],
  //   shallow
  // )

  // useEffect(() => {
  //   getAllPosts()
  // }, [getAllPosts])

  return (
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <ul>
          {posts.map((post: any) => {
            return (
              <li key={post.id}>
                <Link href={`/blog/${post.id}`}>{post.title}</Link>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default Posts
