import Link from 'next/link'

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
)

export const Footer = () => {
  return (
    <footer className="flex flex-col justify-center max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 mb-8" />

      <div className="flex items-end ml-auto">
        <div className="ml-5 mr-5">
          <ExternalLink href="https://twitter.com/Yuu_19960912">
            <img src="/images/twitter.svg" width={40} height={40} alt="twitter-logo" />
          </ExternalLink>
        </div>
        <div className="">
          <ExternalLink href="https://github.com/YuuUchimura">
            <img src="/images/github-icon.svg" width={38} height={38} alt="github-logo" />
          </ExternalLink>
        </div>
      </div>
    </footer>
  )
}
