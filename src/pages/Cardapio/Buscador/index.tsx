import React from "react";
import styles from './Buscador.module.scss';
import { CgSearch } from 'react-icons/cg';

interface Props{
    busca: string,
    //para conferir o tipo do setBusca, confira no const criado que puxa ele 
    setBusca : React.Dispatch<React.SetStateAction<string>>
}

export default function Buscador({busca, setBusca}: Props){
    return(
        <div className={styles.buscador}>
            <input
                value={busca}
                //onChange cuida da atribuição de valor
                onChange={(evento)=> setBusca(evento.target.value)}/>

            <CgSearch
                size = {20}
                color="#4C4D5E"/>
            
        </div>
    )
}

//Os icones do React-icons devem ser importados
//Para instalar o pacote é npm install react-icons