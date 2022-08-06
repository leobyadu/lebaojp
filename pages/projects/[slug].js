import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

import { getProjectItem, getProjectSlugs } from "../../lib/data"

export const getStaticPaths = async () => {
    const slugsRes = await getProjectSlugs();
    const slugs = slugsRes.projects;
    console.log(slugs);

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const projectItem = await getProjectItem(params.slug);
  return {
    props: {
        projectItem: projectItem.projects[0],
        contents: await serialize(projectItem.projects[0].content),
    },
  };
};

export default function Home({ projectItem, contents }) {
    console.log(projectItem);
    // console.log(contents);

  return (
    <div className="px-3 py-3" key={projectItem.id}>
      <Head>
        <title>Nextjs Blog</title>
        <meta name="description" content="Nextjs Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-3xl mx-auto items-center justify-between">         
        <h1 className="text-3xl py-3">{projectItem.title}</h1>
        <div>
        {projectItem.tags.map(tag => (
          <span key={tag} className="text-white uppercase text-xs mr-2 px-2 py-1 rounded bg-slate-800">{tag}</span>
        ))}
        </div>
        <div className="my-5">
          <Image
              src={projectItem.image[0].url}
              width={projectItem.image[0].width}
              height={projectItem.image[0].height}
              alt={projectItem.title}
              priority
              layout="responsive"
            />
        </div>
        <div className="my-3">
          <MDXRemote {...contents} />
        </div>
        <div className="mt-11 text-center">
          <span className="bg-transparent hover:bg-slate-800 text-black hover:text-white font-semibold py-2 px-4 border border-black hover:border-transparent rounded">
            <Link href="/projects">Back to Projects</Link>
          </span>
        </div>
      </div>      
    </div>
  );
}
