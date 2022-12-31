import '../styles/globals.css';
import "tailwindcss/tailwind.css";

import Menu from "../components/Menu";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return <>
  
    {/* <Menu /> */}
    <Component {...pageProps} />
    {/* <Footer /> */}
    </>
}

export default MyApp
