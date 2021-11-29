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
        <Image src="/images/avater.png" width={84} height={84} />
      </Link>
      <div className="flex justify-between w-36 items-end text-white text-xl">
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
      </div>
      {/* <div>
        <div className="">
          <ExternalLink href="https://twitter.com/Yuu_19960912">
            <img src="/images/twitter.svg" width={40} height={40} alt="twitter-logo" />
          </ExternalLink>
        </div>
        <ExternalLink href="https://github.com/YuuUchimura">
          <img src="/images/github-icon.svg" width={38} height={38} alt="github-logo" />
        </ExternalLink>
      </div> */}
    </nav>
  )
}
