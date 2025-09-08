// pages/sitemap.xml.js
import { fetcher } from "@/lib/api"

export default function Sitemap() { return null }

const URL = "https://menezes-avocat.com"

const toISODate = (d) => new Date(d).toISOString().slice(0, 10)

function generateSiteMap(posts = []) {
  const staticUrls = [
    "/", "/le-cabinet", "/droitdutravail", "/droit-de-la-securite-sociale",
    "/honoraires", "/actualites", "/faqs", "/contact",
    "/mentions-legales", "/politique-de-confidentialite"
  ]

  const staticXml = staticUrls.map(
    (path) => `<url><loc>${URL}${path}</loc></url>`
  ).join("")

  const postsXml = posts.map((post) => {
    const slug = post?.attributes?.slug
    const updated = post?.attributes?.updatedAt
    if (!slug) return ""
    return `<url>
      <loc>${URL}/actualites/${slug}</loc>
      ${updated ? `<lastmod>${toISODate(updated)}</lastmod>` : ""}
    </url>`
  }).join("")

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticXml}
  ${postsXml}
</urlset>`
}

export async function getServerSideProps({ res }) {
  let postsList = { data: [] }

  try {
    // On ne liste que les articles publiés, du plus récent au plus ancien
    postsList = await fetcher(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/posts?populate=*&publicationState=live&sort=updatedAt:desc`
    )
  } catch (e) {
    // Silence radio : on renvoie au moins les URLs statiques
  }

  const sitemap = generateSiteMap(postsList?.data || [])

  res.setHeader("Content-Type", "text/xml")
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400")
  res.write(sitemap)
  res.end()

  return { props: {} }
}
