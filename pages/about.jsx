//lib
import styled from 'styled-components'
import Image from 'next/image'

//components
import { Nav } from '../components/Nav'
import { Container } from '../components/Container'
import { Footer } from '../components/Footer'

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
)

export default function About() {
  const HiddenScrollBar = styled.div`
    ::-webkit-scrollbar {
      display: none;
    }
  `
  return (
    <>
      <Container>
        <Nav />
        <div className="animate-fade bg-background2 bg-cover fixed top-0 right-0 left-0 bottom-0 flex justify-center">
          <div className="flex w-11/12 fixed top-1/4">
            <div className="w-full">
              <Image src="/images/avatar.png" width={300} height={300} alt="My avatar" />
            </div>
            <div className="w-full text-white">
              <h2 className="text-5xl">うちむら ゆう</h2>
              <HiddenScrollBar className="mt-5 h-4/5 overflow-y-scroll">
                <p className="my-3">平成８年９月１２日生まれ（２５歳）</p>
                <p className="my-1">茨城県 👉 東京 👉 神奈川県横浜市在住</p>
                <p className="my-1">趣味: 映画鑑賞・アニメ鑑賞・筋トレ・旅行</p>
                <p className="my-1">左右の名：●●</p>
                <p className="my-1">
                  こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。
                  こんにちは。 こんにちは。 こんにちは。 こんにちは。 こんにちは。 こんにちは。
                  こんにちは。 こんにちは。 こんにちは。
                  こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。
                  こんにちは。 こんにちは。 こんにちは。 こんにちは。 こんにちは。 こんにちは。
                  こんにちは。 こんにちは。 こんにちは。 こんにちは。 こんにちは。 こんにちは。
                  こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。
                  こんにちは。 こんにちは。 こんにちは。 こんにちは。 こんにちは。 こんにちは。
                  こんにちは。 こんにちは。 こんにちは。 こんにちは。 こんにちは。 こんにちは。
                  こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。
                  こんにちは。 こんにちは。 こんにちは。 こんにちは。 こんにちは。 こんにちは。
                  こんにちは。 こんにちは。 こんにちは。 こんにちは。 こんにちは。 こんにちは。
                  こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。
                  こんにちは。 こんにちは。 こんにちは。 こんにちは。 こんにちは。 こんにちは。
                  こんにちは。 こんにちは。 こんにちは。 こんにちは。 こんにちは。 こんにちは。
                  こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。
                  こんにちは。 こんにちは。 こんにちは。 こんにちは。 こんにちは。 こんにちは。
                </p>
                <div>
                  <h1 className="text-5xl">SKILL</h1>
                  <div className="flex justify-around">
                    <Image src="/images/html-5.svg" width={60} height={60} />
                    <Image src="/images/css-3.svg" width={60} height={60} />
                    <Image src="/images/javascript.svg" width={60} height={60} />
                    <Image src="/images/react.svg" width={60} height={60} />
                    <Image src="/images/nextjs.svg" width={60} height={60} />
                    <Image src="/images/git-icon.svg" width={60} height={60} />
                    <Image src="/images/github-icon.svg" width={60} height={60} />
                    <Image src="/images/firebase.svg" width={60} height={60} />
                    <Image src="/images/tailwindcss.svg" width={60} height={60} />
                    <Image src="/images/notion.svg" width={60} height={60} />
                  </div>
                </div>
              </HiddenScrollBar>
            </div>
          </div>
          <Footer />
        </div>
      </Container>
    </>
  )
}
