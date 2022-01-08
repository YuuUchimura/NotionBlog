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
        <div className="md:flex justify-around pt-10">
          <div className="lg:w-7/12">
            {!posts.length && <p claasName="text-gray-600 mb-4">No posts found.</p>}
            {posts.map((post) => {
              const imageSrc =
                post.properties.Images.files[0].type === 'external'
                  ? post.properties.Images.files[0].external.url
                  : post.properties.Images.files[0].file.url

              const createTime = new Date(post.created_time).toLocaleString(
                { timeZone: 'Asia/Tokyo' },
                {
                  month: 'short',
                  day: '2-digit',
                  year: 'numeric',
                }
              )
              return (
                <div className="lg:w-full md:w-11/12 text-2xl flex flex-col mb-12 p-10 text-gray-500 bg-white shadow-lg">
                  <p className="text-sm">{createTime}投稿</p>
                  <h2 className="pt-10">{post.properties.name.title[0].plain_text}</h2>
                  <img className="mx-auto" width={300} src={imageSrc} />
                  <Link key={post.id} href={`/${post.properties.Slug.rich_text[0].plain_text}`}>
                    {/* {post.properties.Description.rich_text[0].plain_text} */}
                    <a className="w-36 mx-auto p-2 mt-5 border-2 border-solid border-blue-300 hover:border-blue-500 text-blue-300 hover:text-blue-500 text-sm cursor-pointer">
                      LEAD MORE
                    </a>
                  </Link>
                </div>
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
