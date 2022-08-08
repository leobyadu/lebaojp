import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { getPosts } from "../lib/data";

export const getStaticProps = async () => {
  const data = await getPosts();
 

  return {
    props: {
      items: data.posts,
    },
  };
};


export default function Slider({ items }) {
    console.log(items);
  return (
    <>
    </>
  );
}
