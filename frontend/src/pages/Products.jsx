import React from "react";

import "../assets/css/products.css";
import Card from "../components/Card";
import astronaut from "../assets/img/astronauta3.png";


export default class Products extends React.Component {

  constructor(props) {
    super(props);
    // this.exibirProdutos();
    this.exibirCategoria = this.exibirCategoria.bind(this);
    this.exibirTodos = this.exibirTodos.bind(this);
  }

  //  -----------------------------------   Exibição por categoria
  exibirCategoria(categoria) {
    let elementos = document.getElementsByClassName("card-Produto");

    for (var i = 0; i < elementos.length; i++) {
      if (categoria === elementos[i].id) {
        elementos[i].style = "";
      } else {
        elementos[i].style = "display:none";
      }
    }
  }
  //  -----------------------------------   Exibir todos
  exibirTodos() {
    let elementos = document.getElementsByClassName("card-Produto");

    for (var i = 0; i < elementos.length; i++) {
      elementos[i].style = "";
    }
  }

  render() {
    return (
      <>
        <div className="main">
          <div className="header">
            <div className="content">
              <ul className="nav">
                <li
                  className="nav-item mx-4"
                  type="button"
                  onClick={() => this.exibirTodos()}
                >
                  Todos
                </li>
                <li
                  className="nav-item mx-4"
                  type="button"
                  onClick={() => this.exibirCategoria("geladeira")}
                >
                  Geladeiras
                </li>
                <li
                  className="nav-item mx-4"
                  type="button"
                  onClick={() => this.exibirCategoria("fogao")}
                >
                  Fogões
                </li>
                <li
                  className="nav-item mx-4"
                  type="button"
                  onClick={() => this.exibirCategoria("microondas")}
                >
                  Microondas
                </li>
                <li
                  className="nav-item mx-4"
                  type="button"
                  onClick={() => this.exibirCategoria("lavadora")}
                >
                  Lavadoras
                </li>
                <li
                  className="nav-item mx-4"
                  type="button"
                  onClick={() => this.exibirCategoria("lavaLoucas")}
                >
                  Lava Louças
                </li>
              </ul>
            </div>
          </div>

          <Card />
          
          <img className="astronaut3" src={astronaut} alt="" />
        </div>
      </>
    );
  }
}
