import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//O BowserRouter que permite alternância entre rotas/paginas

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Inicio/>} 
        /* Esse primeiro route é quem cria a pagina inicial*//>
        <Route path='/cardapio' element={<Cardapio/>}
        /* Esse por sua vez é a rota pra pagina do cardapio *//>
      </Routes>
    </Router>
  );
}
