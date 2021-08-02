import styles from "styles/components/sections/About.module.scss";
import Script from "next/script";
import {Button, Title, HtmlTag, Sphere, LinkIcon} from "components";

export default function About() {

    return (
        <section className={styles["about"]}>
            <Script type="text/javascript" src="/tagcanvas.min.js" strategy="beforeInteractive"/>
            <div className={styles["content"]}>
                <div className={styles["left"]}>
                    <Title text={"About Me"}/>
                    <HtmlTag text="<p>"/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ducimus error facilis
                        necessitatibus porro tempore? Adipisci dolorem iste modi natus praesentium sed totam.
                        Consectetur exercitationem iure reprehenderit ullam. Animi, ipsum. Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Architecto atque ipsa nam natus non numquam quam quisquam.
                    </p>
                    <HtmlTag text="<p/>"/>
                    <Button text="Curriculum Vitae" icon={<LinkIcon fill="var(--accent)"/>} href={"/cv"}/>
                </div>
                <div className={styles["right"]}>
                    <Sphere/>
                </div>
            </div>
        </section>
    )
}
