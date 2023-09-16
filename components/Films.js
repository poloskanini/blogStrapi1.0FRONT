import Link from "next/link"
import Container from "./Container"

export default function Films( {films} ) {
  
  return (
    <>

      <ul className="list-none space-y-4 text-lg font-bold h-100% my-20">
        {films &&
          films.data.map((film) => {
            return (
              <li key={film.id}>
                <Link href={`films/` + film.attributes.slug}>{film.id}. {film.attributes.title}</Link>
              </li>
            )
          })}
      </ul>

    </>
  )
}