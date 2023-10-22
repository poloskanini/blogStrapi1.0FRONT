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
  // console.log(postsList.data[0].attributes.updatedAt);

  // Generate the XML sitemap with the blog data
  const sitemap = generateSiteMap(postsList);
 
  res.setHeader("Content-Type", "text/xml");
  // Send the XML to the browser
  res.write(sitemap);
  res.end();
 
  return {
    props: {
      posts: postsList
    },
  };
}