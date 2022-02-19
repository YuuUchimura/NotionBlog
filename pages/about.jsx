//lib
import styled from 'styled-components'
import Image from 'next/image'

//components
import { DefaultLayout } from '../layouts/DefaultLayout'
import { AboutContent } from '../components/morecures/AboutContent'

export default function About() {
  const HiddenScrollBar = styled.div`
    ::-webkit-scrollbar {
      display: none;
    }
  `

  return (
    <>
      <DefaultLayout>
        <div className="animate-fadeup text-gray-100 mb-12">
          <div className="lg:flex lg:justify-between">
            <div className="lg:w-1/2">
              <Image
                className="rounded-full"
                src="/images/my_icon.png"
                width={400}
                height={400}
                alt="my_icon"
              />
            </div>
            <div className="lg:w-1/2 leading-8">
              <AboutContent />
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  )
}
