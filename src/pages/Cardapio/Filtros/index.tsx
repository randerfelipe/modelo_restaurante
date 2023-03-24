import filtros from './filtros.json';
import styles from './Filtros.module.scss';
import classNames from 'classnames';


// é possível usar o método abaixo para puxar
// os dados do arquivo .json
/*interface Opcao{
    id : number;
    label: string;
}*/

//o type nesse caso é usado para puxar os dados do json
type IOpcao = typeof filtros[0];

interface Props{
    filtro: number | null;
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filtros({filtro, setFiltro}: Props){
  function selecionarFiltro(opcao: IOpcao){

    //para delecionar um determinado filtro, usa-se: 

    if(filtro === opcao.id ) return(setFiltro(null));
    return setFiltro(opcao.id);

  }
  return <div className={styles.filtros}>
        
    {filtros.map((opcao)=>(
      //essas opcao estao sendo importadas do json

      //Para tornar possível selecionar uma opcao, usa-se o botao abaixo : 
      <button  className={classNames({
        //utilizando a propriedade do import classnames
        [styles.filtros__filtro] : true,
        [styles['filtros__filtro--ativo']] : filtro === opcao.id
      }

      )}
      key={opcao.id} 
      onClick={()=> selecionarFiltro(opcao)}>
        {opcao.label}
      </button>
    ))}
  </div>;
}