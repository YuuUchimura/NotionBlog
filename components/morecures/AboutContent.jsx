import React, { useState } from 'react'
import Image from 'next/image'
import { AboutTitle } from '../atoms/AboutTitle'

export const AboutContent = () => {
  const contents = [
    '将来は、自分の新規事業を立ち上げたいと思っています！',
    '新しい技術に対する学習意欲！',
    '目標達成のためなら努力を惜しまない貪欲さ！',
    '難しい課題にぶちあたった時の諦めない粘り強さ！',
    '三度の飯よりプログラミング！３時のおやつは必須。',
    'そろそろ英語学習開始します。現在は出川イングリッシュ！',
    'こころも笑顔もやさしさ満点！たまに損します。。。',
  ]

  const skillImages = [
    '/images/skills/html-5.svg',
    '/images/skills/css-3.svg',
    '/images/skills/javascript.svg',
    '/images/skills/react.svg',
    '/images/skills/nextjs.svg',
    '/images/skills/git-icon.svg',
    '/images/skills/github-icon.svg',
    '/images/skills/firebase.svg',
    '/images/skills/tailwindcss.svg',
    '/images/skills/notion.svg',
  ]

  return (
    <>
      <div className="text-left">
        <h1 className="text-center text-6xl lg:text-7xl my-10">Yuu Uchimura</h1>
        <p>
          <div className="text-center">
            平成８年９月１２日生（２５歳）
            <br /> 茨城 👉 東京 👉 神奈川県横浜市在住
          </div>
          <div>
            <br /> 【趣味】 映画鑑賞・筋トレ・旅行・サウナ
            <br /> 【好きな言葉】人間は考える葦である
            <br /> 【好きな食べ物】カレー・寿司 カレーは好きすぎてスパイスから作っちゃうほどです👳🏽‍♂️
            <br />
            不味すぎて二度と作らないですけど（笑）
            <br />
            <br />
            2020年10月にプログラミングをスタート。
            <br />
            最初は独学で勉強をしていましたが、
            独学だとどうしても学習速度が遅かったため翌年６月にプログラミングスクールに通うことを決意。
            <br />
            スポンジのような吸収力でみるみる知識を身に付け、2022年1月に卒業。
            <br />
            新規事業開発に強いエンジニアになり、将来は自分で新規事業を立ち上げたいと思っています！
          </div>
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
        <div className="flex justify-center flex-wrap">
          {skillImages.map((skillImage, i) => {
            return <img className="mx-3 my-2" src={skillImage} width={60} height={60} />
          })}
        </div>
      </div>
    </>
  )
}
