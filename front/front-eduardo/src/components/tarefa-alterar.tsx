import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";
import { Tarefa } from "../Models/Tarefa";


function TarefaAlterar() {
    const [id, setId] = useState("");
  

    function alterarTarefa(){
        axios
      .put<Tarefa>(`http://localhost:5000/tarefas/alterar/${id}`)
      .then((response) => {
        console.log("Tarefa alterada", response.data);      
      })
      .catch((error) => {
        console.error("Erro ao alterar tarefa", error);
      });
    }
    return (
        <div>
          <h1>Alterar Tarefa</h1>
          <li>
          <Link to="/pages/tarefas/listar">Listar tarefas </Link>
          </li>
          <form onSubmit={alterarTarefa}>
            <label>Digite o id da tarefa que gostaria de alterar</label>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />{" "}
            <button type="submit">Alterar</button>
          </form>
        </div>
      );
  }

  


export default TarefaAlterar;
