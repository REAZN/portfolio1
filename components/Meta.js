import Head from "next/head";
import config from "/config";

const title = "REAZN - Portfolio"
const description = "Personal portfolio of Lewis Thompson, a Front-end web developer and designer."
const image = `${config.siteUrl}/images/og.png`;

export default function Meta() {

    return (
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta charSet="UTF-8"/>
            <meta name="robots" content="index, follow"/>

            <meta name="author" content={title}/>
            <meta name="description" content={description}/>
            <meta name="keywords" content="HTML, CSS, SCSS, JavaScript, React, React.js, Node, Node.js, Next, Next.js, Portfolio, UK, Software Engineer, Web Developer, UI, UX, Designer, front-end"/>

            <meta property="og:title" content={title}/>
            <meta property="og:creator" content="REAZN"/>
            <meta property="og:description" content={description}/>
            <meta property="og:image" content={image}/>

            <meta name="twitter:creator" content={config.social.twitter}/>
            <meta name="twitter:title" content={title}/>
            <meta name="twitter:description" content={description}/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:image" content={image}/>

            <link rel="icon" href="/favicons/favicon.png"/>
        </Head>
    )
}
