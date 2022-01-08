//lib
import Link from 'next/link'

export const Nav = () => {
  return (
    <nav className="bg-gray-900 bg-opacity-80 text-white text-xl">
      <div className="flex justify-between items-center w-4/5 h-16 mx-auto">
        <Link href="/">Home</Link>
        <div className="sm:w-52 flex justify-around">
          <Link href="/about">About</Link>
        </div>
      </div>
    </nav>
  )
}
