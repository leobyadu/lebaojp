import Link from "next/link";

export default function Menu() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex sm:flex-row justify-between w-full md:pt-10 ss:pt-3 ss:flex-col items-center">
        <div className="text-center">
          <h1 className="text-xl static text-red-500">Bao</h1>
          <span className=" text-slate-200">Blog&Portfolio</span>
        </div>
        <ul className="flex sm:mt-0 text-xl ss:text-center ss:pt-10">
          <li>
            <Link href="/">
              <a className="text-gray-500 hover:text-slate-100 active:text-slate-100">
                Portfolio
              </a>
            </Link>
          </li>
          <li className="ml-7">
            <Link href="/posts">
              <a className="text-gray-500 hover:text-slate-100 active:text-slate-100">
                Blog
              </a>
            </Link>
          </li>
          <li className="ml-7">
            <Link href="#">
              <a className="text-gray-500 hover:text-slate-100 active:text-slate-100">
                Inspirations
              </a>
            </Link>
          </li>
          
        </ul>
        <div className="text-base text-white">Today {new Date().toLocaleString("en-US", { day : '2-digit'})}-{new Date().toLocaleString("en-US", { month: "numeric" })}-{new Date().getFullYear()}</div>
      </div>
    </div>
  );
}

/* <li className="ml-7">
    <Link href="/jlpt">
      <a className="text-gray-500 hover:text-slate-100 active:text-slate-100">
        JLPT 
      </a>
    </Link>
  </li> */