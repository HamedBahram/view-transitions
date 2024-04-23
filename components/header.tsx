import { Link } from 'next-view-transitions'

import { ThemeToggle } from '@/components/theme-toggle'

export default function Header() {
  return (
    <header className='py-4'>
      <nav className='container flex items-center justify-between'>
        <ul className='flex gap-6'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>

        <ThemeToggle />
      </nav>
    </header>
  )
}
