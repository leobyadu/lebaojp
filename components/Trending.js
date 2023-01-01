import { getProjTrendings } from "../lib/data";

export const getStaticProps = async () => {
  const data = await getProjTrendings();
  return {
    props: {
      datatrend,
    },
  };
};

export default function Trending({ datatrend }) {
  return (
    <section className="max-w-5xl mx-auto text-center text-white my-10">
      <div className="text-3xl">
        Trending
        {datatrend?.projects?.map((item) => (
          <div key={item.slug}>{item.title}</div>
        ))}
      </div>
    </section>
  );
}
