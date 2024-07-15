'use client'

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
    </>
  )
}
