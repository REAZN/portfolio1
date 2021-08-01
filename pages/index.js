import {Meta, Nav, Hero, About} from "components";

export default function Home() {
    return (
        <>
            <Meta title={"REAZN"} description={"Hello"} image={"images/og-image.png"}/>
            <Nav/>
            <Hero/>
            <About/>
        </>
    )
}
