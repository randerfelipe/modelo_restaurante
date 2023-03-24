import styles from './Item.module.scss';
import cardapio from '../itens.json';
import classNames from 'classnames';

//Funcao type está importando os valores do json/backend
type Props = typeof cardapio[0];

export default function Item(props: Props){
  //Aqui o const irá pegar os valores obtidos com o props
  //e inserir eles dentro das tags html dinamicamente
  const {title, description, category, size, serving, price, photo } = props;

  return(
  //Exibição de cada dados dos items puxados
    <div className={styles.item}>
      <div className={styles.item__imagem}>
        <img src ={photo} alt = {title} />
      </div>
            
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}><h2>{title}</h2><p>{description}</p></div>
        <div className={styles.item__tags}>
                    
          <div className={classNames({
            //Cada tipo de comida vai ter um scss
            [styles.item__tipo]: true,
            //Assim ele estiliza diferentemente pra cada um dinamicamente : 
            [styles[`item__tipo__${category.label.toLowerCase()}`]] : true
          })}>{category.label}</div>

          <div className={styles.item__porcao}>{size}g</div>
          <div className={
            //Como aqui pode servir uma pessoa só, deve ser conferir para poder apresentar corretamente
            styles.item__qtdpessoas}>Serve {serving} pessoa
            {serving ===1 ? '' : 's'} </div>
          <div className={
            //A funcao .toFixed(2) insere o ".00" 
            styles.item__valor}>R${price.toFixed(2)}</div></div>
      </div>
    </div>
  );
}