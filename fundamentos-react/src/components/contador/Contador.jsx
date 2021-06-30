import React, { Component } from "react";
import "./Contador.css";
import Display from "./Display";
import PassoForm from "./PassoForm";
import Botao from "./Botao";

class Contador extends Component {
  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 5,
  };

  inc = () => {
    this.setState({ numero: this.state.numero + this.state.passo });
  };

  dec = () => {
    this.setState({ numero: this.state.numero - this.state.passo });
  };

  setPasso = (novoPasso) => {
    this.setState({ passo: novoPasso });
  };

  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        <Display numero={this.state.numero}/>
        <PassoForm  passo={this.state.passo} setPasso={this.setPasso} />
        <Botao func={this.dec} text={"-"} />
        <Botao func={this.inc} text={"+"} />
      </div>
    );
  }
}

export default Contador;
