//components
import { TitleAndNumber } from '../morecures/TitileAndNumber'
import { ExternalLink } from '../atoms/Footer'
import { Tags } from '../atoms/Tags'
import { PortforioDesc } from '../atoms/PortforioDesc'
//mapの要素
// const pfs = {
//   title: ['WEBサイト', 'SNAKE-GAME'],
//   url: [
//     'https://yuuuchimura.github.io/salon_beppu/',
//     'https://yuuuchimura.github.io/hooks-snake-game/',
//   ],
//   img: ['/images/portforio/salon-beppu.png', '/images/portforio/snake-game.png'],
// }

export const Portforio = () => {
  return (
    <div>
      <TitleAndNumber number="No.3" title="PORTFORIO" />
      {/* 後にmapで回す */}
      <div className="lg:flex flex-wrap justify-around">
        <div className="flex flex-col justify-between lg:w-5/12 w-full text-sm mb-12 p-5 text-white bg-black shadow-lg border-t-4 border-solid border-yellow-300">
          <h2 className="text-xl">Dating</h2>
          <ExternalLink href="https://dating-e2e6a.firebaseapp.com/">
            <img src="/images/portforio/Dating.png" />
          </ExternalLink>
          <div className="flex">
            <Tags content="React" />
            <Tags content="Firebase" />
          </div>
          <div className="flex">
            <PortforioDesc description="デートプラン投稿・検索アプリ" />
          </div>
        </div>
        <div className="flex flex-col justify-between lg:w-5/12 w-full text-sm mb-12 p-5 text-white bg-black shadow-lg border-t-4 border-solid border-yellow-300">
          <h2 className="text-xl">WEBサイト</h2>
          <ExternalLink href="https://yuuuchimura.github.io/salon_beppu/">
            <img src="/images/portforio/salon-beppu.png" />
          </ExternalLink>
          <div className="flex">
            <Tags content="HTML" />
            <Tags content="CSS" />
          </div>
          <div className="flex">
            <PortforioDesc description="模写コーディング" />
            <PortforioDesc description="レスポンシブ対応可" />
          </div>
        </div>
        <div className="flex flex-col justify-between lg:w-5/12 w-full text-sm mb-12 p-5 text-white bg-black shadow-lg border-t-4 border-solid border-yellow-300">
          <h2 className="text-xl">SNAKEGAME</h2>
          <ExternalLink href="https://yuuuchimura.github.io/hooks-snake-game/">
            <img src="/images/portforio/snake-game.png" />
          </ExternalLink>
          <div className="flex">
            <Tags content="HTML" />
            <Tags content="CSS" />
            <Tags content="React" />
          </div>
          <div className="flex">
            <PortforioDesc description="ゲーム" />
          </div>
        </div>
      </div>
    </div>
  )
}
