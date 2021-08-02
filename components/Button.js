import styles from "styles/components/Button.module.scss";

export default function Button({text, icon, href}) {
    return (
        <a href={href} target="_blank" rel="noreferrer" className={styles["button"]} tabIndex="-1">
            <button>
                {text}
                {icon}
            </button>
        </a>

    )
}
