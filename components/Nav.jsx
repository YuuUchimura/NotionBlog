import Link from 'next/link'
import Image from 'next/image'

const ExternalLink = ({ href, children }) => (
  <a className="hover:underline" target="_blank" rel="noopener noreferrer" href={href}>
    {children}
  </a>
)

export const Nav = () => {
  return (
    <nav className="flex justify-between w-3/5 my-24 mx-auto items-center">
      <Link href="/">
        <Image src="/images/avater.png" width={84} height={84} />
      </Link>
      <div className="flex justify-between w-36 items-end">
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
      </div>
    </nav>
  )
}
