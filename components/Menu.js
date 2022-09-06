import Link from "next/link";
export default function Header() {
  return (
    <div className="w-full py-10 px-4 sm:px-6 lg:px-0">
      <div className="flex flex-col sm:flex-row justify-between max-w-3xl mx-auto items-center">
        <div className="text-3xl sm:text-2xl font-semibold grid grid-col-1">
            <span>Bao</span>
            <span className="text-xs text-red-500">Blogs&Portfolio</span></div>
        <ul className="flex mt-4 sm:mt-0">
          <li>
            <Link href="/">
              <a className="text-gray-900 hover:text-red-500 hover:underline">Home</a>
            </Link>
          </li>
          {/* <li className="ml-4">
            <Link href="/about">
              <a className="text-gray-900 hover:text-red-500 hover:underline">About</a>
            </Link>
          </li> */}
          <li className="ml-4">
            <Link href="/projects">
              <a className="text-gray-900 hover:text-red-500 hover:underline">Projects</a>
            </Link>
          </li>
          <li className="ml-4">
            <Link href="/posts">
              <a className="text-gray-900 hover:text-red-500 hover:underline">Blog</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
