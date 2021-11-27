import Link from 'next/link'

const ExternalLink = ({ href, children }) => (
  <a
    className="p-1 sm:p-4 text-gray-900 hover:underline"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
)

export const Nav = () => {
  return (
    <nav className="flex justify-between h-48 max-w-4xl  md:my-8 mx-auto ">
      <Link href="/">Home</Link>
      <div className="align-text-bottom">
        <Link href="/blog">Blog</Link>
        <ExternalLink href="#">Twitter</ExternalLink>
        <ExternalLink href="#">Git Hub</ExternalLink>
      </div>
    </nav>
  )
}
