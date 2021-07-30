import styles from "styles/components/sections/About.module.scss";
import {Title} from "components";

export default function About() {
    return (
        <section className={styles["about"]}>
            <Title text={"About Me"}/>
        </section>
    )
}
