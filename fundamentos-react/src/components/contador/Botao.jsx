import React from "react";

const Botao = (props) => {
  return (
      <button onClick={props.func}>{props.text}</button>
  );
};

export default Botao;
