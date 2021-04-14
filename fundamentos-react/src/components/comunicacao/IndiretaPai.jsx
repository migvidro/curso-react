import React from "react";
import IndiretaFilho from "./IndiretaFilho";

const IndiretaPai = (props) => {
  let nome = "";
  let idade = 0;
  let nerd = false;

  function fornecerInformacoes(nomeParam, idadeParam, nerdParam) {
    nome = nomeParam;
    idade = idadeParam;
    nerd = nerdParam;
  }

  return (
    <div>
      <div>
        <span>{nome} </span>
        <span>
          <strong>{idade}</strong>{" "}
        </span>
        <span>{nerd ? "Verdadeiro" : "Falso"}</span>
      </div>
      <IndiretaFilho quandoClicar={fornecerInformacoes} />
    </div>
  );
};

export default IndiretaPai;
