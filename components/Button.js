import styles from "styles/components/Button.module.scss";

export default function Button({text}) {
    return (
        <button className={styles["button"]}>{text}</button>
    )
}
