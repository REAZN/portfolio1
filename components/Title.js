import styles from "styles/components/Title.module.scss";

export default function Title({text}) {
    return (
        <h1 className={styles["section-title"]}>{text}
            <svg width="90" height="6" viewBox="0 0 90 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="3" y1="3" x2="55" y2="3" stroke="#DA7779" strokeWidth="6" strokeLinecap="round"/>
                <path d="M76 3H66" stroke="#DA7779" strokeWidth="6" strokeLinecap="round"/>
                <path d="M87 3H86" stroke="#DA7779" strokeWidth="6" strokeLinecap="round"/>
            </svg>
        </h1>

    )
}
