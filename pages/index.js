import {Meta, Nav, Hero, About, Footer} from "components";

export default function Home() {
    return (
        <>
            <Meta title={"REAZN"} description={"Hello"} image={"icons/og-image.png"}/>
            <Nav/>
            <Hero/>
            <About/>
            <Footer/>
        </>
    )
}
