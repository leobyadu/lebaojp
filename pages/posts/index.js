import { requestToBodyStream } from "next/dist/server/body-streams";
import Wrapper from "../../layout/wrapper";
import { getAll } from "../../lib/data";

import Link from "next/link";
import Image from "next/image";

export const getStaticProps = async () => {
  const data = await getAll();
  return {
    props: {
      data,
    },
  };
};

export default function Posts({ data }) {
  return (
    <Wrapper>
      <div className="">{ListPosts({ data })}</div>
    </Wrapper>
  );
}

function ListPosts({ data }) {
  return (
    <section className="px-20 pt-20 max-w-7xl mx-auto ss:px-3 ss:pt-5">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 md:gap-7 sm:gap-5">
        {/* -------- Single item -------- */}
        {data?.posts?.map((item) => (
          <div key={item.slug} className="pt-10">
            <Link href={`/posts/${item.slug}`}>
              <a>
                <Image
                  src={item.coverImage.url}
                  width={item.coverImage.width}
                  height={item.coverImage.height}
                  className="hover:scale-105 rounded shadow"
                  alt={item.coverImage.id}
                ></Image>
                <h1 className="text-2xl font-bold pt-2 text-white">
                  {item.title}
                </h1>
                <p className="text-xl text-gray-400">{item.description}</p>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
