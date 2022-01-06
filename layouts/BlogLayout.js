//components
import { Header } from '../components/atoms/Header'
import { Nav } from '../components/atoms/Nav'
import { Footer } from '../components/atoms/Footer'
import { Container } from '../components/Container'

export default function BlogLayout({ children, data }) {
  return (
    // <Container
    //   title={data.properties.name.title[0].plain_text}
    //   description={data.properties.Description.rich_text[0].plain_text}
    //   date={new Date(data.properties.Date.date.start)}
    //   type="article"
    // >
    <>
      <Header />
      <Nav />
      <div className="bg-gray-100 pt-8">
        <article className="flex flex-col w-4/5 mx-auto p-10 text-left text-base bg-white shadow-lg">
          {children}
        </article>
      </div>
      <Footer />
    </>
    // </Container>
  )
}
