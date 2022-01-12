//components
import { Footer } from '../components/atoms/Footer'
import { Header } from '../components/atoms/Header'
import { Container } from '../components/Container'

export const DefaultLayout = (props) => {
  const { children } = props
  return (
    <>
      <Container>
        <Header />
        {children}
        <Footer />
      </Container>
    </>
  )
}
