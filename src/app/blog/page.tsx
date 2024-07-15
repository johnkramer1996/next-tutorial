import Posts from '@/components/Posts'
import { PostSearch } from '@/components/PostSearch'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Next App',
}

export default function Blog() {
  return (
    <div>
      <h1>Blog page</h1>
      <PostSearch />
      <Posts />
    </div>
  )
}
