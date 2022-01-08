//lib
import Link from 'next/link'

export const Header = () => {
  return (
    <>
      <div className="bg-gray-100">
        <div className="flex justify-center">
          <Link href="/">
            <img className="cursor-pointer my-10" width={300} src="/header-logo.png" alt="" />
          </Link>
        </div>
      </div>
    </>
  )
}
