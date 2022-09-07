import Link from "next/link";

export default function Hero() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0 flex flex-col lg:items-center py-20">
      <h1 className="text-6xl text-gray-900 lg:text-center font-bold max-w-lg">
        My first Blog &#38; Portfolio{" "}
        <span className="text-green-700">Website</span>
      </h1>
      <p className="text-xs">This blog I made by Next.js + Tailwind css + GraphCMS</p>
      <Link href="https://github.com/leobyadu/my-nextjs-blog" >
        <a className="m-2 hover:text-red-500 border-solid border-1">GitHub</a>
      </Link>
      <p className="text-gray-700 font-semibold text-xl mt-8 lg:text-center">
        Change your life today. Don&apos;t gamble on the future, act now,
        without delay.
      </p>
    </div>
  );
}
