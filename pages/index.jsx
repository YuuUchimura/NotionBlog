import Image from 'next/image'
import { Container } from '../components/Container'
import Link from 'next/link'
import { getNotionData } from '../lib/getNotionData'
import { Introduction } from '../components/introduction'

export default function Home({ posts }) {
  return (
    <Container>
      <Introduction />
    </Container>
  )
}

export const getStaticProps = async () => {
  const database = await getNotionData(process.env.NOTION_DATABASE_ID)

  return {
    props: {
      posts: database,
    },
  }
}
