//lib
import Link from 'next/link'

export const Header = () => {
  return (
    <>
      <div className="flex justify-center items-center animate-slideIn h-48 md:h-72">
        <Link href="/">
          <img className="cursor-pointer my-10" width={300} src="/header-logo.png" alt="" />
        </Link>
      </div>
    </>
  )
}