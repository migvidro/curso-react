/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import './App.css'
import Card from "./components/layout/Card.jsx";
import Primeiro from "./components/basicos/Primeiro.jsx";
import ComParametro from "./components/basicos/ComParametro.jsx";
import Fragmento from "./components/basicos/Fragmento.jsx";
import Aleatorio from "./components/basicos/Aleatorio.jsx";

export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">
      <Card titulo="#04 - Desafio Aleatorio" color="#FA6900">
        <Aleatorio min={1} max={60} />
      </Card>
      <Card titulo="#03 - Framento" color="#E94C6F">
        <Fragmento />
      </Card>
      <Card titulo="#02 - Com Parametro" color="#E8B71A">
        <ComParametro
          titulo="Situação do Aluno"
          aluno="Pedro Silva"
          nota={9.3}
        />
      </Card>
      <Card titulo="#01 - Primeiro" color="#588C73">
        <Primeiro />
      </Card>
    </div>
  </div>
);
