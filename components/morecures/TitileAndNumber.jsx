export const TitleAndNumber = ({ number, title }) => {
  return (
    <div className="flex justify-start font-display animate-slideIn text-gray-100 text-6xl py-10">
      <h1>{number}</h1>
      <h1 className="ml-4 text-5xl">{title}</h1>
    </div>
  )
}
