import Image from 'next/image'

import { AboutTitle } from "../atoms/AboutTitle"

export const AboutContent = () => {
  const contents = [
    '将来的な目標はフルスタックエンジニア！誰にも負けない志の高さ',
    '新しい技術に対する学習意欲！',
    '目標達成のためなら努力を惜しまない貪欲さ！',
    '難しい課題にぶちあたった時の諦めない粘り強さ！',
    '三度の飯よりプログラミング！３時のおやつは必須。',
    'そろそろ英語学習開始します。現在は出川English',
    'こころも笑顔もやさしさ満点！たまに損します。。。',
  ]

  return (
    <>
      <div>
        <h1 className="text-7xl mb-10">Yuu Uchimura</h1>
        <p>
          平成８年９月１２日生まれ（２５歳）
          <br /> 茨城県 👉 東京 👉 神奈川県横浜市在住
          <br /> 【趣味】 映画鑑賞・アニメ鑑賞・音楽・筋トレ・旅行
          <br /> 【好きな言葉】人間は考える葦である
          <br /> 【好きな食べ物】カレー・寿司
          <br />
          カレーは好きすぎてスパイスから作っちゃうほどです👳🏽‍♂️
          <br />
          不味すぎて二度と作らないですけど（笑）
          <br /> <br />
          2020年10月にプログラミングをスタート。
          <br />
          最初は独学で勉強をしていましたが、
          独学だとどうしても学習速度が遅かったため翌年６月にプログラミングスクールに通うことを決意。
          <br />
          スポンジのような吸収力でみるみる知識をにつけ2022年1月に卒業。
          <br />
          現在も成長中。
        </p>
        <br />
        <AboutTitle title="My Potential" />
        <ul className="text-left">
          {contents.map((content, index) => (
            <div className="flex items-center">
              <span className="font-Comic italic text-6xl mr-5 text-yellow-300 font-black">
                {index + 1}
              </span>
              <li className="items-center">{content}</li>
            </div>
          ))}
        </ul>
      </div>
      <div>
        <AboutTitle title="SKILL" />
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
    </>
  )
}
