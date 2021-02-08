import React from "react";

import "../assets/css/products.css";
import Card from "../components/Card";
import astronaut from "../assets/img/astronauta3.png";


export default function Products() {

  //  -----------------------------------   Exibição por categoria
  const exibirCategoria = (categoria) => {
    console.log(categoria);
    let elementos = document.getElementsByClassName("card-produto");

    for (var i = 0; i < elementos.length; i++) {
      if (categoria === elementos[i].id) {
        elementos[i].style = "";
      } else {
        elementos[i].style = "display:none";
      }
    }
  }

  //  -----------------------------------   Exibir todos
  const exibirTodos = () => {
    let elementos = document.getElementsByClassName("card-produto");

    for (var i = 0; i < elementos.length; i++) {
      elementos[i].style = "";
    }
  }

  return (
    <>
      <div className="main">
        <div className="dropdown-show d-flex justify-content-center my-5">
            <button className="btn dropdown-toggle d-flex align-items-center" type='button' id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <p className="my-auto">Categorias</p>
            </button>

            <div className="dropdown-menu shadow" aria-labelledby="dropdownMenuLink">
                <button className="dropdown-item" type="button" onClick={() => exibirTodos()}>Todos(12)</button>
                <button className="dropdown-item" type="button" onClick={() => exibirCategoria('geladeira')}>Geladeiras(3)</button>
                <button className="dropdown-item" type="button" onClick={() => exibirCategoria('fogao')}>Fogões(2)</button>
                <button className="dropdown-item" type="button" onClick={() => exibirCategoria('microondas')}>Microondas(3)</button>
                <button className="dropdown-item" type="button" onClick={() => exibirCategoria('lavadora')}>Lavadora de Roupas(2)</button>
                <button className="dropdown-item" type="button" onClick={() => exibirCategoria('lavaLoucas')}>Lava Louças(2)</button>
            </div>
        </div>

        <Card />
        
        <img className="astronaut3" src={astronaut} alt="" />
      </div>
    </>
  );
}
