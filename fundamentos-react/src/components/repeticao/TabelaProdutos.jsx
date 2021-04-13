/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import produtos from "../../data/produtos";
import "./TabelaProdutos.css";

const TabelaProduto = (props) => {
  return (
    <div className="TabelaProdutos">
      <table border="1">
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Nome</th>
            <th>Preco</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto, key) => {
            return (
              <tr className={key % 2 === 0 ? "Par" : "Impar"} key={key}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>R$ {produto.preco.toFixed(2).replace(".", ",")}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaProduto;
