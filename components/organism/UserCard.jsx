//lib
import styled from 'styled-components'
import Image from 'next/image'

export const UserCard = () => {
  const HiddenScrollBar = styled.div`
    ::-webkit-scrollbar {
      display: none;
    }
  `
  return (
    <>
      <div className="bg-gray-200 ">
        <div className="flex items-center min-h-screen w-11/12 mx-auto">
          <div className="w-full">
            <Image src="/images/avatar.png" width={300} height={300} alt="My avatar" />
          </div>
          <div className="w-full text-brack">
            <h2 className="text-5xl">うちむら ゆう</h2>
            <HiddenScrollBar className="mt-5 h-4/5 overflow-y-scroll">
              <p className="my-3">平成８年９月１２日生まれ（２５歳）</p>
              <p className="my-1">茨城県 👉 東京 👉 神奈川県横浜市在住</p>
              <p className="my-1">趣味: 映画鑑賞・アニメ鑑賞・音楽・筋トレ・旅行</p>
              <p className="my-1">好きな言葉：人間は考える葦である</p>
              <p className="my-1">好きな食べ物：カレー・寿司</p>
              <p className="my-1">
                カレーは好きすぎてスパイスから作っちゃうほどです👳🏽‍♂️
                <br />
                不味すぎて二度と作らないですけど（笑）
              </p>
            </HiddenScrollBar>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}
