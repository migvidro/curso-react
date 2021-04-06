import ReactDOM from "react-dom";
import React, { Fragment } from 'react';

import './index.css';
import Primeiro from './components/basicos/Primeiro.jsx';
import ComParametro from './components/basicos/ComParametro.jsx';
import Fragmento from './components/basicos/Fragmento.jsx';

ReactDOM.render(
    <>
        <Primeiro />
        <ComParametro titulo="Situação do Aluno"
            aluno="Pedro Silva" nota={9.3} />
        <Fragmento />
    </>,
    document.getElementById("root")
);
