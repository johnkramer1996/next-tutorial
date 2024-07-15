export async function getAllPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')

  return response.json()
}

export async function getPostsBySearch(search: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?q=${search}`
  )

  return response.json()
}
