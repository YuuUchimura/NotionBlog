//lib
import Link from 'next/link'
import Image from 'next/image'

export const MiniProfile = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center lg:w-1/4 md:w-2/5 h-96 text-gray-500 bg-white pt-4 px-4 shadow-lg">
        <Image
          className="rounded-full"
          src="/images/my_icon.png"
          width={150}
          height={150}
          alt="my_icon"
        />
        <h2 className="my-2">Yuu Uchimura</h2>
        <p className="text-xs">
          高校卒業後就職のため上京。約５年間勤めるもアプリがどうできているのか気になって調べながら作ってみると楽しくなり「これを仕事にしたい！」と思い転職を決意。
        </p>
        <p className="text-xs">
          現在はオンラインのプログラミングスクールで勉強中！１月に卒業予定。
        </p>
        <Link href="/about">
          <p className="text-xs text-blue-300 hover:text-blue-500 cursor-pointer my-5">
            プロフィール詳細
          </p>
        </Link>
      </div>
    </>
  )
}
