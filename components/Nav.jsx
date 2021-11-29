import Link from 'next/link'
import Image from 'next/image'

const ExternalLink = ({ href, children }) => (
  <a className="hover:underline" target="_blank" rel="noopener noreferrer" href={href}>
    {children}
  </a>
)

export const Nav = () => {
  return (
    <nav className="flex justify-around items-center bg-black fixed left-0 right-0 top-0 z-10">
      <Link href="/">
        <Image src="/images/avatar.png" width={84} height={84} />
      </Link>
      <div className="flex justify-between w-36 items-end text-white text-xl">
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
      </div>
    </nav>
  )
}
