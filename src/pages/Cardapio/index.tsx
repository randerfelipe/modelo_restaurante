import React from "react";
import styles from "./Cardapio.module.scss";
import {ReactComponent as Logo} from 'assets/logo.svg';
import Buscador from "./Buscador";
import { useState } from "react";
import Filtros from "./Filtros";
import Ordenador from "./Ordenador";

export default function Cardapio(){
    //constantes, pra puxarem valores 
    //de outros arquivos e setarem em estados
    const [busca, setBusca] = useState("");

    //Para o caso do filtro, ele tem que começar vazio, logo terá nulo setado
    const [filtro, setFiltro] = useState<number | null>(null);

    return(
        <main>
            <nav className={styles.menu}>
                <Logo/>
                
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
                <div className={styles.cardapio__filtros}>
                    < Filtros 
                    filtro={filtro}
                    setFiltro={setFiltro}
                    />

                    <Ordenador/>
                </div>
            </section>

        </main>
    )
}