import { Footer } from '../components/atoms/Footer'
import { Header } from '../components/atoms/Header'
import { Nav } from '../components/atoms/Nav'
import { Container } from '../components/Container'

export const DefaultLayout = (props) => {
  const { children } = props
  return (
    <>
      <Header />
      <Nav />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}
