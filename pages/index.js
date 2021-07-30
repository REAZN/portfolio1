import {Meta, Nav, Hero, About} from "components";
import styles from "styles/pages/index.module.scss";

export default function Home() {
    return (
        <>
            <Meta title={"REAZN"} description={"Hello"} image={"images/og-image.png"}/>
            <Nav/>
            <div className={styles["padding"]}>
                <Hero/>
                <About/>
            </div>
        </>
    )
}
