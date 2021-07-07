import "./App.css";
import "./components/layout/Card.css";

import React from "react";
import ReactDOM from "react-dom";

import Primeiro from "./components/Primeiro";
import ComParamaetro from "./components/ComParamaetro";
import ComFilhos from "./components/ComFilhos";
import Card from "./components/layout/Card";
import Repeticao from "./components/Repeticao"

export default (props) => {
  return (
    <div className="App">
      <Card titulo="Repeticao">
        <Repeticao></Repeticao>
      </Card>
      <Card titulo="Com filho">
        <ComFilhos>
          <ul>
            <li>hue</li>
            <li>hue</li>
            <li>hue</li>
            <li>hue</li>
            <li>hue</li>
          </ul>
        </ComFilhos>
      </Card>
      <Card titulo="Primeiro">
        <Primeiro></Primeiro>
      </Card>

      <Card titulo="Componente com parametro">
        <ComParamaetro
          titulo="Esse e o titulo"
          subtitulo="Esse e o subtitulo"
        ></ComParamaetro>
      </Card>
    </div>
  );
};
