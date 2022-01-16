export const TitleAndNumber = ({ number, title }) => {
  return (
    <div className="flex justify-start items-end font-display animate-slideIn text-gray-100 text-6xl py-10">
      <h1 className="text-5xl md:text-7xl">{number}</h1>
      <h1 className="ml-4 text-3xl md:text-6xl">{title}</h1>
    </div>
  )
}
