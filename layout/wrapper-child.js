import Menu from "../components/Menu"


import Head from "next/head"

export default function WrapperChild ({children}) {
    return (
        <>
        <Head>
            <title>Bao Blog&Portfolio</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </Head>
            <div className="bg_gradient">                
                <div className="max-w-screen-xl">
                    <Menu />
                    {children}                                               
                </div>
            </div> 
       
        </>
    )
}