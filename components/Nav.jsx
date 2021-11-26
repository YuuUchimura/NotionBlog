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

export default function Nav() {
  return (
    <nav className="flex justify-center items-center max-w-4xl w-full p-8 my-0 md:my-8 mx-auto">
      <div>
        <Link href="/">
          <a className="p-1 sm:p-4 text-gray-900 hover:underline">Home</a>
        </Link>
        <ExternalLink href="#">Twitter</ExternalLink>
        <ExternalLink href="#">Git Hub</ExternalLink>
      </div>
    </nav>
  )
}
