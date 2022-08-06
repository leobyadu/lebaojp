import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { getProjects } from "../../lib/data";

export const getStaticProps = async () => {
  const data = await getProjects();
  // console.log(data);
  return {
    props: {
      items: data.projects,
    },
  };
};

export default function Projects({ items }) {
  console.log(items);
  return (
    <>
      <div className="max-w-3xl mx-auto grid lg:grid-cols-2 sm:grid-cols-1">
        {items?.map((item) => (
          <div key={item.slug}>
            <Link href={`/projects/${item.slug}`}>
              <a>
                <div className="m-2">
                  <Image className="hover:opacity-80 " 
                    src={item.image[0].url}
                    height={item.image[0].height}
                    objectFit="cover"
                    width={item.image[0].width}
                  />
                </div>
                {/* <div className="flex-auto px-6 ">
                  <h1 className="text-2xl font-semibold transition-colors duration-300">
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
                </div> */}
              </a>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
