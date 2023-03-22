import styles from './Item.module.scss';
import logo from 'assets/logo.svg';

export default function Item(){
    return(
        <div className={styles.item}>
            <div className={styles.item__imagem}>
                <img src ={logo} alt = "imagem" />
            </div>

            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}><h2> Macarrone</h2><p> descreve macarone</p></div>
                <div className={styles.item__tags}>
                <div className={styles.item__tipo}>Massa</div>
                <div className={styles.item__porcao}>400g</div>
                <div className={styles.item__qtdpessoas}>serve 2 pessoas </div>
                <div className={styles.item__valor}>5 reais</div></div>
            </div>
        </div>
    )
}