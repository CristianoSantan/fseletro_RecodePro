import React from "react";

import "../assets/css/404.css";

import astronauta2 from "../assets/img/astronauta2.png";

export default function Error() {
  return (
    <>
      <div className="main">
        <div className="container">
          <h2>Houston, we have a problem</h2>
          <div className="jumbo">
            <img src={astronauta2} alt="astronaut" />
            <div className="msgErro">
              <h1>Erro 404</h1>
              <div>
                <button className="btn">Página Inicial</button>
              </div>
            </div>
          </div>
          <p>Com certeza deu ruim, volte para a página inicial.</p>
        </div>
      </div>
    </>
  );
}
