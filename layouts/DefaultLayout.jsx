import { Footer } from '../components/atoms/Footer'
import { Header } from '../components/atoms/Header'
import { Nav } from '../components/atoms/Nav'
import { Container } from '../components/Container'

import styled from 'styled-components'


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
