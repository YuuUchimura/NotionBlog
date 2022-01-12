//lib
import Link from 'next/link'

//components
import { getNotionData } from '../lib/getNotionData'
import { MiniProfile } from '../components/organism/MiniProfile'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { TitleAndNumber } from '../components/morecures/TitileAndNumber'

export default function Home({ posts }) {
  return (
    <>
      <DefaultLayout>
        <MiniProfile />
        <TitleAndNumber number="No.2" title="Blog" />
        <div className="flex flex-wrap justify-around">
          {!posts.length && <p claasName="text-gray-600 mb-4">No posts found.</p>}
          {posts.map((post) => {
            // const imageSrc =
            //   post.properties.Images.files[0].type === 'external'
            //     ? post.properties.Images.files[0].external.url
            //     : post.properties.Images.files[0].file.url

            const createTime = new Date(post.created_time).toLocaleString(
              { timeZone: 'Asia/Tokyo' },
              {
                month: 'short',
                day: '2-digit',
                year: 'numeric',
              }
            )
            return (
              <div className="flex flex-col justify-between lg:w-5/12 w-full text-sm mb-12 p-5 text-white bg-black shadow-lg border-t-4 border-solid border-yellow-300">
                <p>{createTime}投稿</p>
                <h2 className="text-xl p-1">{post.properties.name.title[0].plain_text}</h2>
                <img className="mx-auto" width={200} src={post.properties.Images.url} />
                <p>{post.properties.Description.rich_text[0].plain_text}</p>
                <Link key={post.id} href={`/${post.properties.Slug.rich_text[0].plain_text}`}>
                  <a className="w-36 mx-auto p-2 mt-2 border-2 border-solid border-yellow-300 hover:opacity-70 text-yellow-300 hover:opacity-70 text-sm cursor-pointer">
                    LEAD MORE
                  </a>
                </Link>
              </div>
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
      revalidate: 10,
    },
  }
}
