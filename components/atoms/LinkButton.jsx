//lib
import Link from 'next/link'

export const LinkButton = ({ content }) => {
  return (
    <>
      <Link>
      <a className="w-36 mx-auto p-2 mt-2 border-2 border-solid border-yellow-300 hover:opacity-70 text-yellow-300 hover:opacity-70 text-sm cursor-pointer">
        {content}
      </a>
      </Link>
    </>
  )
}
