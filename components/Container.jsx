//lib
import { useRouter } from 'next/router'
import Head from 'next/head'
import styled from 'styled-components'

const BackGround = styled.div`
  background: linear-gradient(350deg, #f5df4d -100%, #575656 85%, #f5df4d 85%, #f5df4d 100%);
`

export const Container = (props) => {
  const { children, ...customMeta } = props
  const router = useRouter()
  const meta = {
    title: 'Uchimura Blog',
    description: `An open-source starter blog template that is statically generated with Next.js, content powered by Notion and styled with Tailwind CSS.`,
    type: 'website',
    image: '/site.png',
    ...customMeta,
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="viewport" content="width=device-width" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://blog.luciovilla.com${router.asPath}`} />
        <link rel="canonical" href={`https://blog.luciovilla.com${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@luciovilla" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && <meta property="article:published_time" content={meta.date} />}
      </Head>
      <BackGround>
        <div className="bg-black bg-opacity-50">
          <main className="w-10/12 md:w-8/12 mx-auto md:text-xl font-display text-center">{children}</main>
        </div>
      </BackGround>
    </>
  )
}
