import Image from 'next/image'

export const Introduction = () => {
  return (
    <div className="w-2/5 m-auto">
      <Image src="/images/avatar.png" width={64} height={64} alt="My avatar" />
      <h2 className="text-5xl">内村 由</h2>
      <p className="my-3">平成８年９月１２日生まれ（２５歳）</p>
      <p className="my-1">茨城県 👉 東京 👉 神奈川県横浜市在住</p>
      <p className="my-1">趣味: 映画鑑賞・アニメ鑑賞・筋トレ・旅行</p>
      <p className="my-1">左右の名：●●</p>
      <p className="my-1">
        こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。 こんにちは。
        こんにちは。 こんにちは。 こんにちは。 こんにちは。 こんにちは。 こんにちは。 こんにちは。
        こんにちは。 こんにちは。
      </p>
    </div>
  )
}
