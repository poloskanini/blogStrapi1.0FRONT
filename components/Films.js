import Link from "next/link"
import Container from "./Container"

export default function Films( {films} ) {
  
  return (
    <>

      <ul className="list-none space-y-4 text-lg font-bold h-80">
        {films &&
          films.map((film) => {
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