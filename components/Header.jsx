//lib
import Link from 'next/link'

export const Header = () => {
  return (
    <>
      <div className="bg-gray-100">
        <div className="flex justify-start items-center w-4/5 h-16 mx-auto text-3xl">
          <Link href="/">UchimuraBlog</Link>
        </div>
      </div>
    </>
  )
}
