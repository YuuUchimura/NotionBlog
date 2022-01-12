//components
import { Header } from '../components/atoms/Header'
import { Nav } from '../components/atoms/Nav'
import { Footer } from '../components/atoms/Footer'
import { Container } from '../components/Container'

import styled from 'styled-components'

export default function BlogLayout({ children, data }) {
  const BackGround = styled.div`
    background: linear-gradient(350deg, #666464 0%, #575656 80%, #f5df4d 50%, #f5df4d 100%);
  `
  return (
    // <Container
    //   title={data.properties.name.title[0].plain_text}
    //   description={data.properties.Description.rich_text[0].plain_text}
    //   date={new Date(data.properties.Date.date.start)}
    //   type="article"
    // >
    <BackGround>
      <div className="bg-black bg-opacity-50 pt-8">
        <Header />
        <article className="flex flex-col w-10/12 lg:w-7/12 mx-auto p-10 text-left text-base">
          {children}
        </article>
        <Footer />
      </div>
    </BackGround>
    // </Container>
  )
}
