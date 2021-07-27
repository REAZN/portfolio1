import styles from "styles/components/Button.module.scss";

export default function Button(props) {
    return (
        <button className={styles["button"]}>{props.text}</button>
    )
}
