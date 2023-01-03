import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

import Menu from "../../components/Menu";

import { getPostItem, getPostSlugs } from "../../lib/data";

export const getStaticPaths = async () => {
  const slugsRes = await getPostSlugs();
  const slugs = slugsRes.posts;
  // console.log(slugs);

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
  // console.log(postItem);
  // console.log(contents);

  return (
    <div className="mx-auto max-w-full ss:px-3 md:px-0" key={postItem.id}>
      <Head>
        <title>Bao Blog| {postItem.title}</title>
        <meta name="description" content="Bao Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg_gradient pb-5">
        <Menu />
      </div>

      <div className="max-w-4xl mx-auto items-center justify-between pt-10">
        <h1 className="text-3xl py-3 font-bold">{postItem.title}</h1>
        <div>
          {postItem.tags.map((tag) => (
            <span
              key={tag}
              className="text-white uppercase text-xs mr-2 px-2 py-1 rounded bg-slate-800"
            >
              {tag}
            </span>
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
        <div className="prose prose-xl max-w-4xl mx-auto">
          <MDXRemote {...contents} />
        </div>
        <div className="py-20 text-center">
          <span className="bg-transparent hover:bg-slate-800 text-black hover:text-white font-semibold py-2 px-4 border border-black hover:border-transparent rounded">
            <Link href="/posts">Back to Posts</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
