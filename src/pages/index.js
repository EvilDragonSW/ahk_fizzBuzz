import styles from "@/styles/Home.module.css";

import Head from "next/head";

export const EMPTY_RESULT_HINT = "Geben Sie einen Werte > 1 ein in das Formular ein.";

function Home() {
    return (
        <>
            <Head>
                <title>Bewerber-Quiz - FizzBuzz - Autohaus König</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1>FizzBuzz - Bewerber Quiz</h1>

                <p>digit greater 0 has to be submitted</p>
                <input placeholder="enter digit"/>
                <button>submit</button>
            </main>
        </>
    );
}

export default Home;
