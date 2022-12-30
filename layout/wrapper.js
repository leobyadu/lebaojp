import Siderbar from "../components/Sidebar"
import Menu from "../components/Menu"
import Footer from "../components/Footer"

import Head from "next/head"

export default function Wrapper ({children}) {
    return (
        <>
        <Head>
            <title>The nextjs Blog</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </Head>
            <div className="flex relative">
                <Siderbar className="absolute top-0 left-0"></Siderbar>
                <div className="w-full">
                    <div>
                        <Menu></Menu>
                        <div className="container" >{children}</div>
                    </div>
                    <Footer></Footer>
                </div>
            </div> 
       
        </>
    )
}