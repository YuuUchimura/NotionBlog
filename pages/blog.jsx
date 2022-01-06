//lib
import Link from 'next/link'
import { getNotionData } from '../lib/getNotionData'

//components
import { DefaultLayout } from '../layouts/DefaultLayout'

export default function blog({ posts }) {
  return (
    <>
      <DefaultLayout>
        <div className="px-32 py-24 bg-gray-100 sm:bg-red-200 ">
          {!posts.length && <p claasName="text-gray-600 mb-4">No posts found.</p>}
          {posts.map((post) => {
            return (
              <Link key={post.id} href={`/${post.properties.Slug.rich_text[0].plain_text}`}>
                <a className="w-3/5 text-2xl m-0 flex flex-col mb-12 bg-white">
                  <h2 className="py-5">{post.properties.name.title[0].plain_text}</h2>
                  <img className="" src={post.properties.Images.url} />
                  <p className="py-5">{post.properties.Description.rich_text[0].plain_text}</p>
                </a>
              </Link>
            )
          })}
        </div>
      </DefaultLayout>
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
