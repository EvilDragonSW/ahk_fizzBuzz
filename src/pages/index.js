import styles from "@styles/Home.module.css";

import Head from "next/head";
import {useRef, useState} from "react";

export const EMPTY_RESULT_HINT = "Geben Sie einen Werte > 1 ein in das Formular ein.";

function Home() {
    const digitInput = useRef();
    const [fizuBuzzValues, setFizuBuzzValues] = useState([]);

    const handleSubmit = ev => {
        ev.preventDefault();

        if(/^\d+$/.test(digitInput.current?.value) && digitInput.current?.value*1 > 0) {
            const digit = digitInput.current?.value*1;
            const values = [];

            for (let i = 1; i <= digit; i++) {
                values.push(i);
            }
            setFizuBuzzValues(values);
        }
    };

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
                <form>
                    <input placeholder="enter digit" type="number" step="1" ref={digitInput}/>
                    <button onClick={handleSubmit} type="submit">submit</button>
                </form>
                <ul className={styles.result}>
                    {fizuBuzzValues.map( (val, idx) => {
                        return (
                            <li key={idx+"-"+val}>{val}</li>
                        );
                    })}
                </ul>
            </main>
        </>
    );
}

export default Home;
