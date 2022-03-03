import React from "react";
import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout";

const Exemplo = () => {
  return (
    <Layout titulo="Usando Componentes">
      <Cabecalho titulo="Next.js & React"/>
      <Cabecalho titulo="Aprenda Next.js na Pratica"/>
    </Layout>
  );
};

export default Exemplo;
