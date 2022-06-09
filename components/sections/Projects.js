import styles from "styles/components/sections/Projects.module.scss";
import { Button, Title, LinkIcon } from "components";
import config from "config";

export default function Projects() {

    return (
        <section className={styles["projects"]}>
            <div className={styles["content"]}>
                <Title text="Projects" />
                <ul>
                    {config.projects.map((project, index) => (
                        <li key={project.title} className={styles["project"]}>
                            <div className={styles["image-container"]}>
                                <img src={`/images/projects/${project.image}`} alt={"project graphic"} />
                            </div>
                            <div className={styles["info"]}>
                                <div className={styles["title"]}>{project.title}</div>
                                <p className={styles["description"]}>{project.description}</p>
                                <div className={styles["technologies"]}>
                                    {project.technologies.map((tech, index) => (
                                        <span key={index}>{tech}</span>
                                    ))}
                                </div>
                                <div className={styles["links"]}>
                                    <Button icon={<LinkIcon fill="var(--accent)" />} href={project.demo}>
                                        Demo
                                    </Button>
                                    <a className={styles["github"]} href={project.github}>GitHub</a>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
