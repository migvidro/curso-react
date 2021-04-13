import React from "react";

const Aleatorio = (props) => {
  const max = Math.floor(props.max);
  const min = Math.ceil(props.min);

  const random = Math.floor(Math.random() * (max - min)) + min;

  return (
    <>
      <h2>Valor Aleatorio</h2>
      <p>
        <strong>Valor Minimo:</strong> {min}
      </p>
      <p>
        <strong>Valor Maximo:</strong> {max}
      </p>
      <p>
        <strong>Valor Escolhido:</strong> {random}
      </p>
    </>
  );
};

export default Aleatorio;
