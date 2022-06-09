import styles from "styles/components/sections/Experiments.module.scss"
import { Button, Title } from "components";
import Image from "next/image";
import config from "config";

import { useState } from "react";

export default function Experiments() {

    const [showMore, updateShowMore] = useState(false);

    return (
        <section className={styles["experiments"]}>
            <div className={styles["content"]}>
                <Title text="Experiments & Open Source" style={{ marginBottom: "2em" }} />

                <ul className={styles["cards"]}>
                    {config.experiments.slice(0, showMore ? config.experiments.length : 3)
                        .map((experiment, index) => (
                            <li key={experiment.title}>
                                <a
                                    href={experiment.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    key={index}>
                                    <div className={styles["image-container"]}>
                                        <Image className={styles["image"]}
                                            src={`/images/codepen/${experiment.image}`}
                                            alt={experiment.name}
                                            layout="responsive"
                                            width={300} height={300}
                                        />
                                    </div>
                                    <div className={styles["info"]}>
                                        <div className={styles["title"]}>
                                            <p>Title</p>
                                            <h3>{experiment.title}</h3>
                                        </div>
                                        <div className={styles["number"]}>
                                            <p>{(index + 1) < 10 ? "0" + (index + 1) : (index + 1)}</p>
                                            <div className={styles["line"]}></div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        ))
                    }
                </ul>

                <Button onClick={() => updateShowMore(!showMore)}
                    style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "4em" }}>
                    {showMore ? "Show Less" : "Show More"}
                </Button>
            </div>
        </section>
    )
}
