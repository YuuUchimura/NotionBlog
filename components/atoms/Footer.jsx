export const ExternalLink = ({ href, children }) => (
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
    <footer className="w-full py-4">
      <div className="flex justify-between items-end mx-auto">
        <p className="text-gray-100 flex">Copyright &copy; 2021</p>
        <div className="flex justify-end items-end">
          <div>
            <ExternalLink href="https://github.com/YuuUchimura">
              <img src="/images/skills/github-icon.svg" width={38} height={38} alt="github-logo" />
            </ExternalLink>
          </div>
        </div>
      </div>
    </footer>
  )
}
