/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import Primeiro from "./components/basicos/Primeiro.jsx";
import ComParametro from "./components/basicos/ComParametro.jsx";
import Fragmento from "./components/basicos/Fragmento.jsx";
import Aleatorio from "./components/basicos/Aleatorio.jsx";

export default () => (
  <>
    <h1>Fundamentos React</h1>
    <Aleatorio min={1} max={60} />
    <Fragmento />
    <ComParametro titulo="Situação do Aluno" aluno="Pedro Silva" nota={9.3} />
    <Primeiro />
  </>
);
