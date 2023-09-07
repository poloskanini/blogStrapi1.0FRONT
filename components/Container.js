export default function Container( { children }) {
  return (
    <main className='px-4 mt-10'>
      <div className='flex justify-center items-center mx-auto rounded-lg max-w-4xl'>
        <div className="text-2xl font-medium">{children}</div>
      </div>
    </main>
  )
}