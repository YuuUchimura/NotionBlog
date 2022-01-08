//lib
import Link from 'next/link'

//components
import { getNotionData } from '../lib/getNotionData'
import { MiniProfile } from '../components/organism/MiniProfile'
import { DefaultLayout } from '../layouts/DefaultLayout'

export default function Home({ posts }) {
  return (
    <>
      <DefaultLayout>
        <div className="md:flex py-10">
          <div>
            {!posts.length && <p claasName="text-gray-600 mb-4">No posts found.</p>}
            {posts.map((post) => {
              const imageSrc =
                post.properties.Images.files[0].type === 'external'
                  ? post.properties.Images.files[0].external.url
                  : post.properties.Images.files[0].file.url
              return (
                <Link key={post.id} href={`/${post.properties.Slug.rich_text[0].plain_text}`}>
                  <a className="lg:11/12 md:w-11/12 text-2xl m-0 flex flex-col mb-12 bg-white shadow-lg">
                    <p className="text-left text-gray-700 text-sm">
                      {post.properties.Date.date.start}
                    </p>
                    <h2 className="py-5">{post.properties.name.title[0].plain_text}</h2>
                    <img width={650} src={imageSrc} />
                    <p className="py-5 text-sm">
                      {post.properties.Description.rich_text[0].plain_text}
                    </p>
                  </a>
                </Link>
              )
            })}
          </div>
          <MiniProfile />
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
