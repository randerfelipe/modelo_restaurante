import styles from './Ordenador.module.scss';
import opcoes from './opcoes.json';
import { useState } from 'react';
import classNames from 'classnames';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

interface Props {
  ordenador: string;
  setOrdenador: React.Dispatch<React.SetStateAction<string>>;
}

export default function Ordenador({ ordenador, setOrdenador }: Props) {
  //pelo principio da responsabilidade única :
  const [aberto, setAberto] = useState(false);

  //Para poder puxar o nome dentro do array do json, deve se usar:
  const nomeOrdenador = ordenador && opcoes.find((opcao) => opcao.value === ordenador)?.nome;
  //Assim, quando fomos mostrá-lo no botão, teremos a string e não o value

  return (
    <button
      className={classNames({
        //Mostrar que o ordenador está ativo ou não
        [styles.ordenador]: true,
        [styles['ordenador--ativo']]: ordenador !== '',
      })}
      //clickando no botão de ordenar, ele abre suas opcoes
      onClick={() => setAberto(!aberto)}
      //clickando fora, a opção é desmarcada, fechando o ordenador
      onBlur={() => setAberto(false)}
    >
      <span>
        {
          //Quando escolhe uma opcao, ela fica selecionada,
          //para mostrar qual o tipo de ordem a ser usada
          nomeOrdenador || 'Ordenar por '
        }
      </span>

      {
        //Setinha de cima e baixo do ordenador :
        aberto ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />
      }

      <div
        className={classNames({
          [styles.ordenador__options]: true,
          [styles['ordenador__options--ativo']]: aberto,
        })}
      >
        {opcoes.map((opcao) => (
          <div className={styles.ordenador__option} key={opcao.value} onClick={() => setOrdenador(opcao.value)}>
            {opcao.nome}
          </div>
        ))}
      </div>
    </button>
  );
}
