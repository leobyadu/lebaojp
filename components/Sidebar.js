import Image from "next/image";

//
import style from "../styles/sidebar.module.css";

export default function Siderbar() {
  return (
    <section className="flex flex-col w-1/5 bg-slate-900 max-h-full">
      <div className={style.sb_hidden}>
        <div className="text-center">
          <div className="logo pt-5">
            <h1 className="text-base text-yellow-500">Bao</h1>
            <p className="text-sm text-green-400">Blog&Portfolio</p>
          </div>
          <div className="pt-10">
            <Image
              src={"/images/avata.png"}
              width={80}
              height={80}
              className="rounded-full shadow-lg"
            ></Image>
            <h1 className="md:text-xl sm:text-base text-green-400">Le&nbsp;Duy&nbsp;Bao</h1>
            <p className="md:text-xl sm:text-base text-green-400">Male</p>
            <p className="md:text-xl sm:text-base text-green-400">Job:&nbsp;Freelance</p>
          </div>
        </div>
        <div className="pt-5 text-center">
          <h1 className="md:text-4xl sm:text-2xl text-yellow-500">Service</h1>
        </div>
        <div className="py-5 px-5">
          <h2 className="md:text-2xl sm text-xl text-green-400 font-semibold pl-3 pt-5 hover:text-yellow-500">
            Illustrator
          </h2>
          <ul className="md:text-xl sm:text-base text-green-400 pl-10">
            <li>Logo</li>
            <li>Namecard</li>
            <li>Banner</li>
            <li>Mockup</li>
            <li>Printing</li>
          </ul>
          <h2 className="md:text-2xl sm text-xl text-green-400 font-semibold pl-3 pt-5  hover:text-yellow-500">
            Web design
          </h2>
          <ul className="md:text-xl sm:text-base text-green-400 pl-10">
            <li>Design Landing page</li>
            <li>Personal website</li>
            <li>EC- Site</li>
            <li>Shopify</li>
            <li>Wordpress</li>
          </ul>
          <h2 className="md:text-2xl sm text-xl text-green-400 font-semibold pl-3 pt-5  hover:text-yellow-500">
            3D design
          </h2>
          <ul className="md:text-xl sm:text-base text-green-400 pl-10">
            <li>3D Modeling</li>
            <li>Making texture</li>
            <li>Digital Handpainting texture</li>
            <li>Rendering</li>
            <li>Sclupt for Printing</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
