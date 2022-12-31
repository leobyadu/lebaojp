import Menu from "../components/Menu"
import Footer from "../components/Footer"

import Head from "next/head"

export default function Wrapper ({children}) {
    return (
        <>
        <Head>
            <title>Bao Blog&Portfolio</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </Head>
            <div className="bg_gradient">                
                <div className="max-w-screen-xl">
                    <div>
                        <Menu></Menu>
                        <div>{children}</div>
                    </div>
                    <Footer></Footer>
                </div>
            </div> 
       
        </>
    )
}