//lib
import Link from 'next/link'
import Image from 'next/image'

//components
import { Header } from '../components/Header'
import { Nav } from '../components/Nav'
import { Container } from '../components/Container'
import { getNotionData } from '../lib/getNotionData'
import { MiniProfile } from '../components/MiniProfile'

import { Footer } from '../components/Footer'

export default function Home({ posts }) {
  return (
    <>
      <Header />
      <Nav />
      <Container>
        <div className="flex py-12">
          <div className="">
            {!posts.length && <p claasName="text-gray-600 mb-4">No posts found.</p>}
            {posts.map((post) => {
              return (
                <Link key={post.id} href={`/${post.properties.Slug.rich_text[0].plain_text}`}>
                  <a className="w-5/6 text-2xl m-0 flex flex-col mb-12 bg-white shadow-lg">
                    <h2 className="py-5">{post.properties.name.title[0].plain_text}</h2>
                    <img src={post.properties.Images.url} />
                    <p className="py-5">{post.properties.Description.rich_text[0].plain_text}</p>
                  </a>
                </Link>
              )
            })}
          </div>
          <MiniProfile />
        </div>
        <Footer />
      </Container>
    </>
  )
}

export const getStaticProps = async () => {
  const database = await getNotionData(process.env.NOTION_DATABASE_ID)

  return {
    props: {
      posts: database,
      // revalidate: 10,
    },
  }
}
