import styles from "styles/components/Htmltag.module.scss";

export default function HtmlTag({text}) {

    return (
        <div className={styles["tag"]} text={text}/>
    )
}
