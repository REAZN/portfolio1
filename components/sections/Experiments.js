import styles from "styles/components/sections/Experiments.module.scss"
import {Button, Title} from "components";
import Image from "next/image";
import config from "config";

export default function Experiments() {
    return (
        <section className={styles["experiments"]}>
            <div className={styles["content"]}>
                <Title text="Experiments & Open Source" style={{marginBottom: "1em"}}/>
                <div className={styles["cards"]}>
                    {config.experiments.map(experiment => (
                        <a className={styles["experiment"]} href={experiment.url} target="_blank" rel="noreferrer"
                           key={experiment.title}>
                            <Image className={styles["image"]} src={`/images/codepen/${experiment.image}`} width={350}
                                   height={350}/>
                            <div>
                                {experiment.title}
                            </div>
                        </a>
                    ))}
                </div>
                <Button style={{margin: "auto"}}>
                    View More
                </Button>
            </div>
        </section>
    )
}
