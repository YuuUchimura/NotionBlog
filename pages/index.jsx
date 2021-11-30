//components
import { Nav } from '../components/Nav'
import { Container } from '../components/Container'

export default function Home() {
  return (
    <>
      <Container>
        <Nav />
        <div className="opacity-90 bg-background1 bg-cover fixed top-0 right-0 left-0 bottom-0 flex justify-center">
          <h1 className="animate-fade text-white tracking-wider text-8xl mx-auto my-auto font-serif">
            Welcome
          </h1>
        </div>
      </Container>
    </>
  )
}
