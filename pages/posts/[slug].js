import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

import { getPostItem, getPostSlugs } from "../../lib/data"

export const getStaticPaths = async () => {
    const slugsRes = await getPostSlugs();
    const slugs = slugsRes.posts;
    console.log(slugs);

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const postItem = await getPostItem(params.slug);
  return {
    props: {
        postItem: postItem.posts[0],
        contents: await serialize(postItem.posts[0].content),
    },
  };
};

export default function Home({ postItem, contents }) {
    console.log(postItem);
    // console.log(contents);

  return (
    <div className="px-3 py-3" key={postItem.id}>
      <Head>
        <title>Nextjs Blog</title>
        <meta name="description" content="Nextjs Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-3xl mx-auto items-center justify-between">         
        <h1 className="text-3xl py-3">{postItem.title}</h1>
        <div>
        {postItem.tags.map(tag => (
          <span key={tag} className="text-white uppercase text-xs mr-2 px-2 py-1 rounded bg-slate-800">{tag}</span>
        ))}
        </div>
        <div className="my-5">
          <Image
              src={postItem.coverImage.url}
              width={postItem.coverImage.width}
              height={postItem.coverImage.height}
              alt={postItem.title}
              priority
              layout="responsive"
            />
        </div>
        <div className="my-3 prose prose-xl">
          <MDXRemote {...contents} />
        </div>
        <div className="mt-11 text-center">
          <span className="bg-transparent hover:bg-slate-800 text-black hover:text-white font-semibold py-2 px-4 border border-black hover:border-transparent rounded">
            <Link href="/posts">Back to Posts</Link>
          </span>
        </div>
      </div>      
    </div>
  );
}
