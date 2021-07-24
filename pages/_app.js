import "../styles/style.scss"
import Head from "next/head";

function App({Component, pageProps}) {
    return (
        <div>
            <Head>
                <title>REAZN's Portfolio</title>
                <meta name="description" content=":)"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Component {...pageProps} />
        </div>
    )
}

export default App
