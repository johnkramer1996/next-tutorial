import { NextResponse } from 'next/server'
import { headers, cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id

  const headersList = headers()
  const type = headersList.get('Content-Type')

  const API_KEY = process.env.OMDB_SECRET

  // redirect('/blog')

  return NextResponse.json({ id, type, API_KEY })
}
