import filtros from './filtros.json';
import styles from './Filtros.module.scss';

// é possível usar o método abaixo para puxar
// os dados do arquivo .json
/*interface Opcao{
    id : number;
    label: string;
}*/

//o type nesse caso é usado para puxar os dados do json
type IOpcao = typeof filtros[0];


export default function Filtros(){
    function selecionarFiltro(opcao: IOpcao){

    }
    return <div className={styles.filtros}>
        
        {filtros.map((opcao)=>(
            //essas opcao estao sendo importadas do json
            <button className={styles.filtros__filtro} 
            key={opcao.id} 
            onClick={()=> selecionarFiltro(opcao)}>
            {opcao.label}
            </button>
        ))}
    </div>
}