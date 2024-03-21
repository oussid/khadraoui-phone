const Container = ({children}) => {
  return (
    <div className="bg-gray-100 w-full min-h-[100vh] px-8 sm:px-12 md:px-20 lg:px-40 xl:px-60 2xl:px-80 flex flex-col gap-20 py-10">
        {
            children
        }
    </div>
  )
}

export default Container