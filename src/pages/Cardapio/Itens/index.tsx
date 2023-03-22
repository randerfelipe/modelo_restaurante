import cardapio from './itens.json';
import Item from './Item';
import styles from './Itens.module.scss';
import { useEffect, useState } from 'react';

interface Props{
    busca: string,
    filtro: number | null,
    ordenador: string;
}

export default function Itens(props : Props){
    const[lista, setLista] = useState(cardapio);
    const {busca, filtro} = props;
   
    //tanto testaBusca quanto testaFiltro realizam as funcoes de filtrar e buscar dentro dos itens

    function testaBusca(title:string){
        //Essa busca usa case issensitive, não diferenciando maiusc e minusc
        const regex = new RegExp(busca, 'i');
        return regex.test(title);
    }

    function testaFiltro(id: number){
        if(filtro !== null) return filtro === id;
        return true
    }


    //Atualizador da lista 
    useEffect(()=> {
        const novaLista = cardapio.filter(item=> testaBusca(item.title) 
        && testaFiltro(item.category.id));
        setLista(novaLista);

    },[busca, filtro])

    return(
        <div className={styles.itens}>
            {lista.map(item =>(
                <Item 
                key={item.id}
                {...item}
                />
            ))}
        </div>
    )
}