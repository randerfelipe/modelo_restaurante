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
    const {busca, filtro, ordenador} = props;
   
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

    function ordenar(novaLista: typeof cardapio){
        switch(ordenador){
            case 'porcao':
                //nesse caso, caso uma porção for maior que outra, ela vem primeiro
                return novaLista.sort((a, b) => a.size > b.size ? 1 : -1);
            case 'qtd_pessoas':
                //nesse caso, quanto mais pessoas servir, mais pra cima
                return novaLista.sort((a,b) => a.serving > b.serving ? 1 : -1);
            case 'preco':
                //nesse caso, quanto mais caro mais pra cima
                return novaLista.sort((a,b)=> a.price > b.price ? 1 : -1);
            default:
                return novaLista;
            }
    }

    //Atualizador da lista 
    useEffect(()=> {
        const novaLista = cardapio.filter(item=> testaBusca(item.title) 
        && testaFiltro(item.category.id));
        setLista(ordenar(novaLista));

    },[busca, filtro, ordenador])

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