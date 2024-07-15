import Link from 'next/link'
import React from 'react'

export const TheHeader = () => {
  return (
    <header>
      <div className='container'>
        <Link href={'/'}>Home</Link>
        <Link href={'/blog'}>Blog</Link>
        <Link href={'/about'}>About</Link>
      </div>
    </header>
  )
}
