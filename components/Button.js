import styles from "styles/components/Button.module.scss";

export default function Button({children, icon, href, style}) {
    return (
        <a href={href} target="_blank" rel="noreferrer" className={styles["button"]} tabIndex="-1">
            <button style={style}>
                {children}
                {icon}
            </button>
        </a>
    )
}
