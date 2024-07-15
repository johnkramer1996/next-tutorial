export async function getAllPosts() {
  const response = await fetch('/api/posts')

  return response.json()
}

export async function getPostsBySearch(search: string) {
  const response = await fetch(`/api/posts?q=${search}`)

  return response.json()
}
