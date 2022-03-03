import React from "react";
import Navegador from "../components/Navegador";

const Home = () => {
  return (
    <div style={
      {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        height: '100vh'
      }
    }> 
      <Navegador texto="Estiloso" destino="estiloso" />
      <Navegador texto="Exemplo" destino="exemplo" cor="#9400D3" />
      <Navegador texto="JSX" destino="jsx" cor="crimson" />
      <Navegador texto="Navegacao #01" destino="navegacao" cor="green" />
      <Navegador texto="Navegacao #02" destino="cliente/sp-2/321" cor="blue" />
      <Navegador texto="Componente com Estado" destino="estado" cor="pink" />
    </div>
  );
};

export default Home;
