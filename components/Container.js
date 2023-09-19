export default function Container( { children }) {
  return (
    <main className='w-full '>
      <div className="mt-32 overflow-hidden sm:mt-20">
        <div className="mx-auto max-w-7xl px-6  lg:px-8">

          { children }
          
        </div>
      </div>
    </main>
  )
}