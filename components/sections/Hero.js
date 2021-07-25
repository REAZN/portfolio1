import {Typewriter} from "react-simple-typewriter";
import styles from "../../styles/components/Hero.module.scss";
import {Signature} from "@components";

export default function Hero() {

    const typeWriterWords = ["DEVELOPER.", "WEB DESIGNER.", "GAME DESIGNER."]

    return (
        <div className={styles["hero"]}>
            <div className={styles["left"]}>
                <h1 className={styles["name"]}>this is reazn</h1>
                <h1 className={styles["type-writer"]}>
                    I'M A{" "}
                    <span>
                        <Typewriter words={typeWriterWords} cursor cursorStyle={"|"} loop delaySpeed={2500}/>
                    </span>
                </h1>
            </div>
            <div className={styles["right"]}>
                <Signature/>
            </div>
        </div>
    )
}
