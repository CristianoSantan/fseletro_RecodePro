import React from "react";

import "../assets/css/home.css";
import astronaut from "../assets/img/astronauta1.png";

export default function Home() {
  return (
    <>
      <main className="main" role="main">
        <div className="content">
          <div className="container bemvindo">
            <h3 className="">Seja bem vindx!</h3>
            <p>
              Aqui em nossa loja, programadores tem desconto nos produtos para
              sua casa!
            </p>
            <img src={astronaut} alt="astronauta" />
          </div>
        </div>
      </main>
    </>
  );
}