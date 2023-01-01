import { getProjTrendings } from "../lib/data";

export const getStaticProps = async () => {
  const data = await getProjTrendings();
  return {
    props: {
      data,
    },
  };
};

export default function Trending({ data }) {
  return (
    <section className="max-w-5xl mx-auto text-center text-slate-800 my-10">
      <div className="text-3xl">
        Trending
        {data?.projects?.map((item) => (
          <div key={item.slug}>{item.title}</div>
        ))}
      </div>
    </section>
  );
}
