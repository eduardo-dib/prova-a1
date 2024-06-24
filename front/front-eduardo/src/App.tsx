import React from "react";
import TarefaListar from "./components/tarefa-listar";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";



function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/funcionario/listar">Listar pacientes</Link>
            </li>
            <li>
              <Link to="/funcionario/cadastrar">Cadastrar pacientes</Link>
            </li>
            <li>
              <Link to ="/funcionario/cadastrar">Listar consultas</Link>
            </li>
            <li>
              <Link to ="/folha/listar">Listar folhas</Link>
            </li>
            <li>
            <Link to ="/folha/cadastrar">Cadastrar folhas</Link>
            </li>


          </ul>
        </nav>
        <Routes>
        <Route path="/" element={<TarefaListar/>} />


        </Routes>
        <footer>
          <p>Sistema de Gestão Hospitalar</p>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;