//lib
import Link from 'next/link'
import Image from 'next/image'

//components
import { TitleAndNumber } from '../morecures/TitileAndNumber'

export const MiniProfile = () => {
  return (
    <div>
      <TitleAndNumber number="No.1" title="Profile" />
      <div className="lg:flex lg:justify-around animate-fadeup items-center text-white">
        <Image
          className="rounded-full"
          src="/images/my_icon.png"
          width={380}
          height={380}
          alt="my_icon"
        />
        <div className="flex flex-col w-full m-0 lg:w-5/12 font-medium">
          <h2 className="text-4xl my-5">Yuu Uchimura</h2>
          <p>
            高校卒業後就職のため上京。約５年間勤めるも、アプリがどうできているのか気になって調べながら作ってみると楽しくなり「これを仕事にしたい！」と思い転職を決意。
          </p>
          <p>JavaScriptに特化したオンラインのプログラミングスクールに約半年間通い2022年1月1日に卒業。</p>
          <Link href="/about">
            <p className="w-36 mx-auto p-2 border-2 border-solid border-yellow-300 hover:opacity-70 text-yellow-300 hover:opacity-70 text-sm cursor-pointer my-12">
              プロフィール詳細
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}
