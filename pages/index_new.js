import Wrapper from "../layout/wrapper";
import Link from "next/link";
import Image from "next/image";

//import data from graphQL Api
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
//   console.log(data);
  return (
    <Wrapper>
      {Posts({ data })}
      {Projects({ data })}
    </Wrapper>
  );
}

function Posts({ data }) {
  return (
    <section className="px-20 pt-20">
      <h1 className="font-bold text-4xl pb-10 pt-5">Recent Posts</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 md:gap-20 sm:gap-10 ">
        {/* -------- Single item -------- */}
        {data?.posts?.map((item) => (
          <div key={item.slug}>
            <Link href={`/posts/${item.slug}`}>
              <a>
                <Image
                  src={item.coverImage.url}
                  width={item.coverImage.width}
                  height={item.coverImage.height}
                  className="hover:scale-105 rounded shadow"
                ></Image>
                <h1 className="text-2xl font-bold pt-5">{item.title}</h1>
                <p className="text-xl text-gray-500">{item.description}</p>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects({ data }) {
  return (
    <section className="px-20 pt-20">
      <h1 className="font-bold text-4xl pb-10 pt-5">Recent Projects</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-20 ">
        {/* -------- Single item -------- */}
        {data?.projects?.map((item) => (
          <div key={item.slug}>
            <div>
              <Image
                src={item.image[0].url}
                width={item.image[0].width}
                height={item.image[0].height}
                alt={item.image[0].id}
                priority
                layout="responsive"
                className="hover:scale-105 rounded shadow"
              ></Image>
              <h1 className="text-2xl font-bold pt-5">{item.title}</h1>
              <div className="">
                {item.tags.map((tag) => (
                  <span
                    className="text-white uppercase text-xs mr-2 mt-2 px-2 py-1 rounded-full bg-slate-800"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-xl text-gray-500">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
