import React, { useState } from "react";
import "./Mega.css";

const Mega = (props) => {
  const [qtde, setQtde] = useState(props.quantidade || 6);
  const [resultado, setResultado] = useState(Array(props.quantidade));

  function handleQtdeInputOnChange(event) {
    setQtde(+event.target.value);
  }

  function geraNovoNumero(min, max, array) {
    const aletorio = parseInt(Math.random() * (max + 1 - min)) + min;

    return array.includes(aletorio)
      ? geraNovoNumero(min, max, array)
      : aletorio;
  }

  function geraNumeros() {
    const result = Array(qtde)
      .fill(0)
      .reduce((nums) => {
        const novoNumero = geraNovoNumero(1, 60, nums);
        return [...nums, novoNumero];
      }, [])
      .sort((a, b) => a - b);

    return result;
  }

  return (
    <div className="Mega">
      <h2>Megasena</h2>
      <label htmlFor="quantidadeInput">Quantidade: </label>
      <input
        min="6"
        max="10"
        id="quantidadeInput"
        type="number"
        value={qtde}
        onChange={handleQtdeInputOnChange}
      />
      <br />
      <h3>{resultado.join(" ")}</h3>
      <button onClick={(_) => setResultado(geraNumeros())}>
        Gerar Números
      </button>
    </div>
  );
};

export default Mega;
