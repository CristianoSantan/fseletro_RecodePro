import React from "react";

import "../assets/css/products.css";

import geladeira from '../assets/img/Geladeira Frost Free Brastemp Side Inverse 540 litros.png';
import astronaut from '../assets/img/astronauta3.png';

export default function Products() {
  return (
    <>
      <div className="main">
        <div className="header">
          <div className="content">
            <ul class="nav">
              <li class="nav-item mx-4">Todos</li>
              <li class="nav-item mx-4">Geladeiras</li>
              <li class="nav-item mx-4">Fogões</li>
              <li class="nav-item mx-4">Microondas</li>
              <li class="nav-item mx-4">Lavadoras</li>
              <li class="nav-item mx-4">Lava Louças</li>
            </ul>
          </div>
        </div>
        <div className="container">
            <div className="card-produto">
                <img src={geladeira} alt=""/>
                <p>Geladeira Frost free Brastemp</p>
                <p>R$ 6389,00</p>
                <p>R$ 6389,00</p>
            </div>
        </div>
        <img className="astronaut3" src={astronaut} alt="" />
      </div>
    </>
  );
}
