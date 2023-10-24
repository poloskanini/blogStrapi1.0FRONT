import { fetcher } from "@/lib/api"

export default function Sitemap() {
  return null;
}

const URL = "https://www.menezes-avocat.com";

function generateSiteMap(posts) {
  
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${URL}/</loc>
      </url>
      <url>
        <loc>${URL}/le-cabinet</loc>
      </url>
      <url>
        <loc>${URL}/droit-du-travail</loc>
      </url>
      <url>
        <loc>${URL}/droit-de-la-securite-sociale</loc>
      </url>   
      <url>
        <loc>${URL}/honoraires</loc>
      </url>
      <url>
        <loc>${URL}/actualites</loc>
      </url>
      <url>
        <loc>${URL}/faqs</loc>
      </url>
      <url>
        <loc>${URL}/contact</loc>
      </url>
      <url>
        <loc>${URL}/mentions-legales</loc>
      </url>
      <url>
        <loc>${URL}/politique-de-confidentialite</loc>
      </url>
     ${posts.data
       .map((post) => {
         return `
           <url>
               <loc>${`${URL}/actualites/${post.attributes.slug}`}</loc>
               <lastmod>${post.attributes.updatedAt}</lastmod>
           </url>
         `;
       })
       .join("")}
   </urlset>
 `;
}

export async function getServerSideProps({ res }) {
  const postsList = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/posts?populate=*`, { next: { revalidate: 1 } })

  const sitemap = generateSiteMap(postsList);
 
  res.setHeader("Content-Type", "text/xml");

  res.write(sitemap);
  res.end();
 
  return {
    props: {
      posts: postsList
    },
  };
}