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
    <footer className="flex items-end w-full py-4">
      <p className="text-gray-100">&copy; 2021</p>
      <div className="flex justify-end items-end w-10/12 mx-auto">
        <div className="mr-4">
          <ExternalLink href="https://twitter.com/Yuu_19960912">
            <img src="/images/twitter.svg" width={40} height={40} alt="twitter-logo" />
          </ExternalLink>
        </div>
        <div>
          <ExternalLink href="https://github.com/YuuUchimura">
            <img src="/images/skills/github-icon.svg" width={38} height={38} alt="github-logo" />
          </ExternalLink>
        </div>
      </div>
    </footer>
  )
}
