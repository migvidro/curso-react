/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import "./App.css";
import Card from "./components/layout/Card";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Familia from "./components/basicos/Familia";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProduto from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";

export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">
    <Card titulo="#10 - Comunicacao Indireta" color="#8BAD39">
        <IndiretaPai />
      </Card>
      <Card titulo="#09 - Comunicacao Direta" color="#59323C">
        <DiretaPai />
      </Card>
      <Card titulo="#08 - Renderizacao Condicional" color="#982395">
        <ParOuImpar numero={20} />
        <UsuarioInfo usuario={{ nome: "Fernando" }} />
        <UsuarioInfo usuario={{ email: "fer@email.com" }} />
        <UsuarioInfo usuario={{}} />
      </Card>
      <Card titulo="#07 - Desafio Produtos" color="#3A9AD9">
        <TabelaProduto />
      </Card>
      <Card titulo="#06 - Repeticao" color="#FF4C65">
        <ListaAlunos />
      </Card>
      <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
        <Familia sobrenome="Ferreira">
          <FamiliaMembro nome="Pedro" />
          <FamiliaMembro nome="Ana" />
          <FamiliaMembro nome="Gustavo" />
        </Familia>
      </Card>
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
