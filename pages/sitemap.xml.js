import { fetcher } from "@/lib/api"

export default function Sitemap() {
  return null;
}

const URL = "https://www.menezes-avocat.com";

function generateSiteMap(posts) {
  
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://www.menezes-avocat.com/</loc>
      </url>
      <url>
        <loc>https://www.menezes-avocat.com/le-cabinet</loc>
      </url>
      <url>
        <loc>https://www.menezes-avocat.com/honoraires</loc>
      </url>
      <url>
        <loc>https://www.menezes-avocat.com/actualites</loc>
      </url>
      <url>
        <loc>https://www.menezes-avocat.com/faqs</loc>
      </url>
      <url>
        <loc>https://www.menezes-avocat.com/contact</loc>
      </url>
      <url>
        <loc>https://www.menezes-avocat.com/droit-du-travail</loc>
      </url>
      <url>
        <loc>https://www.menezes-avocat.com/droit-de-la-securite-sociale</loc>
      </url>   
     ${posts
       .map(({ post }) => {
         return `
           <url>
               <loc>${`${URL}/actualites/${post.data.attributes.slug}`}</loc>
           </url>
         `;
       })
       .join("")}
   </urlset>
 `;
}

export function getServerSideProps() {
  const postsList = fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/posts?populate=*`)
  console.log(postsList);
 
  // Generate the XML sitemap with the blog data
  const sitemap = generateSiteMap(postsList);
 
  res.setHeader("Content-Type", "text/xml");
  // Send the XML to the browser
  res.write(sitemap);
  res.end();
 
  return {
    props: {
      posts: postsList.data
    },
  };
}
