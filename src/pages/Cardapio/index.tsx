import styles from './Cardapio.module.scss';
import Buscador from './Buscador';
import { useState } from 'react';
import Filtros from './Filtros';
import Ordenador from './Ordenador';
import Itens from './Itens';
import Menu from 'components/Menu';

export default function Cardapio() {
  // pelo principio da responsabilidade única, se usa as const para use state
  //constantes, pra puxarem valores
  //de outros arquivos e setarem em estados
  const [busca, setBusca] = useState('');

  //Para o caso do filtro, ele tem que começar vazio, logo terá nulo setado
  const [filtro, setFiltro] = useState<number | null>(null);

  //Para ordenador :
  const [ordenador, setOrdenador] = useState('');

  return (
    <section className={styles.cardapio}>
      <h3 className={styles.cardapio__titulo}>
        Cardápio
        <Buscador busca={busca} setBusca={setBusca} />
      </h3>
      <div className={styles.cardapio__filtros}>
        <Filtros filtro={filtro} setFiltro={setFiltro} />

        <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
      </div>
      <Itens
        //Deve ocorrer ordenação e filtragem dos itens
        //utilizando os componentes já desevolvidos
        busca={busca}
        filtro={filtro}
        ordenador={ordenador}
      />
    </section>
  );
}
