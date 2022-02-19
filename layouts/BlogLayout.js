//components
import { Header } from '../components/atoms/Header'
import { Footer } from '../components/atoms/Footer'
import { Container } from '../components/Container'

//lib
import styled from 'styled-components'

export default function BlogLayout({ children, data }) {
  const BackGround = styled.div`
    background: linear-gradient(350deg, #666464 0%, #575656 80%, #f5df4d 50%, #f5df4d 100%);
  `
  return (
    <BackGround>
      <div className="bg-black bg-opacity-50 pt-8">
        <Header />
        <article className="flex flex-col lg:w-7/12 mx-auto p-10 text-left text-base">
          {children}
        <Footer />
        </article>
      </div>
    </BackGround>
  )
}
