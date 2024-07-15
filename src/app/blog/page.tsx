'use client'

import Posts from '@/components/Posts'
import { PostSearch } from '@/components/PostSearch'
import { getAllPosts } from '@/services/getPosts'
import { useEffect, useState } from 'react'

// export const metadata: Metadata = {
//   title: 'Blog | Next App',
// }

export default function Blog() {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAllPosts()
      .then(setPosts)
      .finally(() => setLoading(false))
  }, [])

  return (
    <div>
      <h1>Blog page</h1>
      <PostSearch onSearch={setPosts} />
      {loading ? <h3>Loading...</h3> : <Posts posts={posts} />}
    </div>
  )
}
