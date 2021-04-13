import React from "react";

const ComParametro = (props) => {
  const status = props.nota >= 7 ? "Aprovado" : "de Recuperação";
  const notaInt = Math.ceil(props.nota);
  return (
    <div>
      <h2>{props.titulo}</h2>
      <p>
        <strong>{props.aluno} </strong>
        tem nota
        <strong> {notaInt} </strong>e está
        <strong> {status}!</strong>
      </p>
    </div>
  );
};

export default ComParametro;
