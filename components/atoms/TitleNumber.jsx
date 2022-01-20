export const TitleNumber = (props) => {
  const { children } = props
  return (
    <>
      <div className="flex justify-start font-display text-gray-900 text-7xl py-10">
        <h1>{children}</h1>
      </div>
    </>
  )
}
