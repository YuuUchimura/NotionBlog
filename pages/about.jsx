//lib
import styled from 'styled-components'
import Image from 'next/image'

//components
import { DefaultLayout } from '../layouts/DefaultLayout'

export default function About() {
  const HiddenScrollBar = styled.div`
    ::-webkit-scrollbar {
      display: none;
    }
  `

  return (
    <>
      <DefaultLayout>
        <div className="animate-fadeup w-full text-gray-100 mb-12">
          <div className="lg:flex">
            <div className="w-full">
              <Image
                className="rounded-full"
                src="/images/my_icon.png"
                width={400}
                height={400}
                alt="my_icon"
              />
            </div>
            <div className="w-full leading-8">
              <h2 className="text-4xl sm:text-5xl mb-12">Yuu Uchimura</h2>
              <p>
                平成８年９月１２日生まれ（２５歳）
                <br /> 茨城県 👉 東京 👉 神奈川県横浜市在住
                <br /> 【趣味】 映画鑑賞・アニメ鑑賞・音楽・筋トレ・旅行
                <br /> 【好きな言葉】人間は考える葦である
                <br /> 【好きな食べ物】カレー・寿司
                カレーは好きすぎてスパイスから作っちゃうほどです👳🏽‍♂️
                <br />
                不味すぎて二度と作らないですけど（笑）
                <br />
                僕は2020年10月にプログラミングをスタートしました。最初は独学で勉強をしていましたが、
                <br />
                独学だとどうしても学習速度が遅かったため翌年６月にプログラミングスクールに通うことを決意。
                <br />
                現在は簡易的なHPやアプリは作成可能
              </p>

              <div>
                <h1 className="mt-10 mb-10 text-5xl">SKILL</h1>
                <div className="flex flex-wrap justify-center">
                  <Image src="/images/skills/html-5.svg" width={60} height={60} />
                  <Image src="/images/skills/css-3.svg" width={60} height={60} />
                  <Image src="/images/skills/javascript.svg" width={60} height={60} />
                  <Image src="/images/skills/react.svg" width={60} height={60} />
                  <Image src="/images/skills/nextjs.svg" width={60} height={60} />
                  <Image src="/images/skills/git-icon.svg" width={60} height={60} />
                  <Image src="/images/skills/github-icon.svg" width={60} height={60} />
                  <Image src="/images/skills/firebase.svg" width={60} height={60} />
                  <Image src="/images/skills/tailwindcss.svg" width={60} height={60} />
                  <Image src="/images/skills/notion.svg" width={60} height={60} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  )
}
