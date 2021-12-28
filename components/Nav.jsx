//lib
import Link from 'next/link'

export const Nav = () => {
  return (
    <nav className="bg-black text-white text-xl">
      <div className="flex justify-between items-center w-4/5 h-16 mx-auto">
        <Link href="/">Home</Link>
        <div className="w-52 flex justify-around">
          <Link href="/about">About</Link>
          {/* <Link href="/blog">Blog</Link> */}
        </div>
      </div>
    </nav>
  )
}
