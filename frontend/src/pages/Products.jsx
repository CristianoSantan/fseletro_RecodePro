import React from "react";

import Card from "../components/Card";

import "../assets/css/products.css";

import geladeira from "../assets/img/Geladeira Frost Free Brastemp Side Inverse 540 litros.png";
import astronaut from "../assets/img/astronauta3.png";

export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      db: [],
    };
    this.exibirProdutos();
    this.exibirCategoria = this.exibirCategoria.bind(this);
    this.exibirTodos = this.exibirTodos.bind(this);
  }

  // -------------------------------------   Api Produtos
  exibirProdutos() {
    fetch(
      "http://localhost/RECODE_Pro/GUERREIRO%20JEDI/REACT/FullStackEletro/fseletro/src/Backend/Api_Produtos.php"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          db: responseJson,
        });
      });
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
              <ul class="nav">
                <li
                  class="nav-item mx-4"
                  type="button"
                  onClick={() => this.exibirTodos()}
                >
                  Todos
                </li>
                <li
                  class="nav-item mx-4"
                  type="button"
                  onClick={() => this.exibirCategoria("geladeira")}
                >
                  Geladeiras
                </li>
                <li
                  class="nav-item mx-4"
                  type="button"
                  onClick={() => this.exibirCategoria("fogao")}
                >
                  Fogões
                </li>
                <li
                  class="nav-item mx-4"
                  type="button"
                  onClick={() => this.exibirCategoria("microondas")}
                >
                  Microondas
                </li>
                <li
                  class="nav-item mx-4"
                  type="button"
                  onClick={() => this.exibirCategoria("lavadora")}
                >
                  Lavadoras
                </li>
                <li
                  class="nav-item mx-4"
                  type="button"
                  onClick={() => this.exibirCategoria("lavaLoucas")}
                >
                  Lava Louças
                </li>
              </ul>
            </div>
          </div>

          <Card arrayProdutos={this.state.db} />
          
          <img className="astronaut3" src={astronaut} alt="" />
        </div>
      </>
    );
  }
}
