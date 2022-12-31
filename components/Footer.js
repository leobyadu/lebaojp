import Link from "next/link";

import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaGithub, FaGitlab } from "react-icons/fa";


  export default function Footer() {
    return (
      <div className="mx-auto pt-20 pb-10 px-4 sm:px-6 lg:px-0 flex flex-col justify-center">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:gird-col-1 justify-center text-center max-w-5xl mx-auto">
          <div>
            <h1 className="footer_tittle">Illustrator</h1>
            <ul className="text-xl text-gray-300">
              <li className="py-2">Logo</li>
              <li className="py-2">Namecard</li>
              <li className="py-2">Banner</li>
              <li className="py-2">Mockup</li>
              <li className="py-2">Printing</li>
            </ul>
          </div>
          <div>
            <h1 className="footer_tittle">Web Design</h1>
            <ul className="text-xl text-gray-300">
              <li className="py-2">Landing Page</li>
              <li className="py-2">Personal Website</li>
              <li className="py-2">EC Site</li>
              <li className="py-2">Shopify</li>
              <li className="py-2">Wordpress themes</li>
            </ul>
          </div>
          <div>
            <h1 className="footer_tittle">3D Design</h1>
            <ul className="text-xl text-gray-300">
              <li className="py-2">3D Modeling</li>
              <li className="py-2">Making texture</li>
              <li className="py-2">Digital Handpainting texture</li>
              <li className="py-2">Rendering</li>
              <li className="py-2">Scupt for 3D Printing</li>
            </ul>
          </div>
        </div>        
        <ul className="mt-8 flex justify-center space-x-6 text-white text-xl ">
          <li><Link href="#"><a className="cursor-pointer"><FaFacebook /></a></Link></li>
          <li><Link href="#"><a className="cursor-pointer"><FaTwitter /></a></Link></li>
          <li><Link href="#"><a className="cursor-pointer"><FaInstagram /></a></Link></li>
          <li><Link href="#"><a className="cursor-pointer"><FaYoutube /></a></Link></li>
          <li><Link href="#"><a className="cursor-pointer"><FaGithub /></a></Link></li>
          <li><Link href="#"><a className="cursor-pointer"><FaGitlab /></a></Link></li>                     
        </ul>        
        <div className="text-gray-500 text-center mt-4 mb-10">
          &copy;{new Date().getFullYear()} Bao Blogs&Portfolio
        </div>
      </div>
    );
  }
  