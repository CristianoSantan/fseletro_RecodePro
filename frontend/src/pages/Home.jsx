import React from "react";

import "../assets/css/home.css";

import astronaut from "../assets/img/astronauta1.png";

export default function Home() {
  return (
    <>
      <main className="main" role="main">
        <div className="">
          <div className="container bemvindo">
            <img src={astronaut} alt="astronauta" />
            <h3 className="">Seja bem vindx!</h3>
            <p className='bemvindo-p'>
              Aqui em nossa loja, programadores tem desconto nos produtos para
              sua casa!
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
