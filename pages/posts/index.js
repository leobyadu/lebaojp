import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { getPosts } from "../../lib/data";

export const getStaticProps = async () => {
  const data = await getPosts();
  console.log(data);

  return {
    props: {
      items: data.posts,
    },
  };
};

export default function Posts({ items }) {
  console.log(items);
  return (
    <>
      <div className="max-w-3xl mx-auto grid grid-cols-1">
        <div><h1 className="text-4xl font-semibold mb-7">All Posts</h1></div>
        {items?.map((item) => (
          <div key={item.slug}>            
            <Link href={`/posts/${item.slug}`}>
              <a>
                <div className="m-2">
                  <div className="text-xs">{item.date}</div>
                  <h1 className="text-2xl font-semibold">
                    {item.title}
                  </h1>
                  <div className="mt-2">                    
                    {item.tags.map((tag) => (
                      <span
                        className="text-white uppercase tracking-wide text-xs mr-2 px-2 py-1 rounded bg-slate-800"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))} 
                    
                  </div>
                </div>                
              </a>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
