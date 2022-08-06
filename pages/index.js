import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import Hero from "../components/Hero";

import { getAll } from "../lib/data";

export const getStaticProps = async () => {
  const data = await getAll();
  return {
    props: {
      data,
    },
  };
};

export default function Home({ data }) {
  console.log(data);

  return (
    <div>
      <Head>
        <title>My First NextJs Blog</title>
        <meta name="description" content="Nextjs Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>      
      {/* <Hero /> */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="mt-20 ">
          <div className="text-4xl font-semibold mb-4">Recent Posts</div>
          {data?.posts?.map((item) => (
            <div key={item.slug} className="grid grid-cols-1 md:grid-cols-4 py-6">
              <div className="mb-2 md:mb-0 md:col-span-1">
                <p className="text-sm">{new Date(item.date).toDateString()}</p>
              </div>
              <div className="md:col-span-3">
                <Link href={`/posts/${item.slug}`}>
                  <a className="text-2xl font-semibold transition-colors duration-300">
                    {item.title}
                  </a>
                </Link>
                <p className="text-gray-700 leading-relaxed"></p>
                <div className="text-sm font-semibold mt-1">{item.authors[0].name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="max-w-3xl mx-auto items-center justify-between">
          <div className="text-4xl font-semibold mb-10 mt-20">Recent Projects</div>
          <div className="grid grid-rows-2 grid-cols-3 gap-8">          
            {data?.projects?.map((item) => (
              <div key={item.slug}>
                <Link href={`/projects/${item.slug}`}>
                  <a>
                    <Image className="shadow rounded"               
                        src={item.image[0].url}
                        width={item.image[0].width}
                        height={item.image[0].height}
                        alt={item.title}
                        priority
                        layout="responsive"       
                      
                      />                
                    <h3 className="font-semibold text-md">{item.title}</h3>
                    <div>
                      {item.tags.map((tag) => (
                        <span className="text-white uppercase text-xs mr-2 px-2 py-1 rounded bg-slate-800" key={tag}>{tag}</span>
                      ))}  
                    </div>                
                  </a>            
                </Link>            
              </div>          
            ))}
            
          </div>
        </div>
      </div>
  );
}
