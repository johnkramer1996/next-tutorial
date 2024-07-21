'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type navLink = {
  label: string
  href: string
}

type Props = {
  navLinks: navLink[]
}

export const Navigation = ({ navLinks }: Props) => {
  const pathName = usePathname()
  const session = useSession()

  return (
    <>
      {navLinks.map((item) => {
        const isActive = pathName === item.href
        return (
          <Link
            key={item.label}
            href={item.href}
            className={isActive ? 'active' : ''}
          >
            {item.label}
          </Link>
        )
      })}
      {session && session.data ? (
        <>
          <Link href={'/profile'}>Profile</Link>
          <Link href={'#'} onClick={() => signOut({ callbackUrl: '/' })}>
            Sign out
          </Link>
        </>
      ) : (
        <Link href={'/signin'}>Sign In</Link>
      )}
    </>
  )
}
