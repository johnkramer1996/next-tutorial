import Link from 'next/link'
import React from 'react'
import { Navigation } from './Navigataion'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
]

export const TheHeader = () => {
  return (
    <header>
      <div className='container'>
        <Navigation navLinks={navItems} />
      </div>
    </header>
  )
}
