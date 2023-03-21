import React from "react";
import styles from "./Cardapio.module.scss";
import {ReactComponent as Logo} from 'assets/logo.svg';
import Buscador from "./Buscador";
import { useState } from "react";

export default function Cardapio(){
    const [busca, setBusca] = useState("");
    return(
        <main>
            <nav className={styles.menu}>
                <Logo/>
                Aluroni
            </nav>

            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa do codigo e da massa
                </div>
            </header>
            <section className={styles.cardapio}>
                <h3 className={styles.cardapio__titulo}>
                    Cardápio
                    <Buscador 
                    busca={busca}
                    setBusca={setBusca}/>
                    
                </h3>
            </section>

        </main>
    )
}