import React from "react";

const IndiretaFilho = (props) => {
  return (
    <div>
      <div>Filho</div>
      <button onClick={(e) => props.quandoClicar("Joao", 53, true)}>
        Fornecer Informacoes
      </button>
    </div>
  );
};

export default IndiretaFilho;
