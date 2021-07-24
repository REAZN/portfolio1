import styles from "../styles/components/Nav.module.scss";

export default function Nav() {
    return (
        <header className={styles["nav"]}>
            {/*<div className={styles["nav"]}>*/}
            <a className={styles["site-name"]}>REAZN</a>
            {/*<button className="hamburger hamburger--squeeze" id="hamburger" type="button" aria-label="Hamburger menu">*/}
            {/*<span className="hamburger-box"/>*/}
            {/*<span className="hamburger-inner"/>*/}
            {/*</button>*/}
            <ul className={styles["nav-links"]}>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            {/*</div>*/}
        </header>
    )
}
