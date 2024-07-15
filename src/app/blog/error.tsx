'use client'
export default function Error({ error }: { error: Error }) {
  return <h1>Opps...{error.message}</h1>
}
