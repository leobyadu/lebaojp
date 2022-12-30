import Link from "next/link";

export default function Menu() {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-0">
      <div className="flex sm:flex-row justify-center w-full text-xl">        
            <ul className="flex sm:mt-0">
              <li>
                <Link href="/">
                  <a className="text-gray-900 hover:text-slate-900 hover:font-bold">Home</a>
                </Link>
              </li>              
              <li className="ml-7">
                <Link href="/posts">
                  <a className="text-gray-900 hover:text-slate-900 hover:font-bold">Blog</a>
                </Link>
              </li>
              <li className="ml-7">
                <Link href="/projects">
                  <a className="text-gray-900 hover:text-slate-900 hover:font-bold">Projects</a>
                </Link>
              </li>
              <li className="ml-7">
                <Link href="/inspirations">
                  <a className="text-gray-900 hover:text-slate-900 hover:font-bold">Inspirations</a>
                </Link>
              </li>
              <li className="ml-7">
                <Link href="/tips">
                  <a className="text-gray-900 hover:text-slate-900 hover:font-bold">Tips</a>
                </Link>
              </li>
              
            </ul>
      </div>
    </div>
  );
}
