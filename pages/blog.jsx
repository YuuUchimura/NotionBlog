//lib
import Link from 'next/link'
import { getNotionData } from '../lib/getNotionData'

//components
import { Nav } from '../components/Nav'
import { Container } from '../components/Container'

export default function blog({ posts }) {
  return (
    <>
      <Container>
        <Nav />
        <div className="my-48">
          {!posts.length && <p claasName="text-gray-600 mb-4">No posts found.</p>}
          {posts.map((post) => {
            return (
              <Link key={post.id} href={`/${post.properties.Slug.rich_text[0].plain_text}`}>
                <a className="">
                  <div className="mb-8 w-full">
                    <h3 className="text-xl font-medium w-full text-gray-900">
                      {post.properties.name.title[0].plain_text}
                    </h3>
                  </div>
                </a>
              </Link>
            )
          })}
        </div>
      </Container>
    </>
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
