import Link from "next/link"

export default function Films( {films} ) {
  
  return (
    <>
      <ul className="list-none space-y-4 text-lg font-bold mt-10 h-80">
        {films &&
          films.data.map((film) => {
            return (
              <li key={film.id}>
                <Link href={`films/` + film.attributes.slug}>{film.attributes.title}</Link>
              </li>
            )
          })}
      </ul>
    </>
  )
}