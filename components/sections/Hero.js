import {Typewriter} from "react-simple-typewriter";
import styles from "styles/components/sections/Hero.module.scss";
import {Signature, Button, HtmlTag} from "components";

export default function Hero() {

    const typeWriterWords = ["DEVELOPER.", "WEB DESIGNER.", "UX, UI DESIGNER."]

    return (
        <section className={styles["hero"]}>
            <div className={styles["left"]}>
                <HtmlTag text={"<h1>"}/>
                <h1 className={styles["name"]}>this is reazn</h1>
                <h1 className={styles["type-writer"]}>
                    I{"'"}M A{" "}
                    <span>
                        <Typewriter words={typeWriterWords} cursor cursorStyle={"|"} loop delaySpeed={2500}/>
                    </span>
                </h1>
                <HtmlTag text={"<h1/>"}/>
                <Button text="Contact Me"/>
            </div>
            <div className={styles["right"]}>
                <Signature fill="var(--text)"/>
            </div>
        </section>
    )
}
