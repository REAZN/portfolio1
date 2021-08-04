import styles from "styles/components/Htmltag.module.scss";

export default function HtmlTag({children, tag}) {

    return (
        <div className={styles["tag"]} before={`<${tag}>`} after={`</${tag}>`}>
            {children}
        </div>
    )
}
