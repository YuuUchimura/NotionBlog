//lib
import Link from 'next/link'

export const Header = () => {
  return (
    <>
      <div className="flex justify-center items-center w-11/12 mx-auto  animate-bg h-48 md:h-72">
        <Link href="/">
          <img className="cursor-pointer my-10" width={500} src="/header-logo.png" alt="" />
        </Link>
      </div>
    </>
  )
}
