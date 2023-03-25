import Cardapio from 'pages/Cardapio';
import Menu from './components/Menu';
import Inicio from 'pages/Inicio';
import styles from './Routes.module.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//O BowserRouter que permite alternância entre rotas/paginas

export default function AppRouter() {
  return (
    <main>
      
      <Router>
        <Menu />
        <header className={styles.header}>
          <div className={styles.header__text}>A casa do codigo e da massa</div>
        </header>
        <Routes>
          <Route
            path='/'
            element={<Inicio />}
            /* Esse primeiro route é quem cria a pagina inicial*/
          />
          <Route
            path='/cardapio'
            element={<Cardapio />}
            /* Esse por sua vez é a rota pra pagina do cardapio */
          />
        </Routes>
      </Router>
    </main>
  );
}
