import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";


import { getAuthors } from "../lib/data";



export const getStaticProps = async () => {
  const data = await getAuthors();
  return {
    props: {
      data,
      contentsbio: await serialize(data.authors[0].bio),
    },
  };
};

export default function About({ data, contentsbio }) {
  //   console.log(data);
  return (
    <>
      <Head>
        <title>About page</title>
        <meta name="description" content="Nextjs Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="text-4xl font-semibold my-10">About Me</div>
        {data?.authors?.map((item) => (
          <div>
            <div className="grid grid-flow-row-dense lg:grid-cols-3 sm:grid-cols-1 gap-4">
              <Image
                className="rounded"
                src={item.picture.url}
                width={item.picture.width/5}
                height={item.picture.height/5}
                layout="responsive"
              />
              <div className="lg:col-span-2 sm:col-span-1">
                <div className="text-xl text-slate-800 mb-5">{item.intro}
                </div>
                <div>
                  <btn className="bg-transparent bg-slate-800 text-white font-semibold p-2 border border-black hover:border-transparent rounded">
                    Download CV
                  </btn>                   
                </div>
              </div>
            </div>
            <div className="my-3 prose prose-xl">
              <MDXRemote {...contentsbio} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
