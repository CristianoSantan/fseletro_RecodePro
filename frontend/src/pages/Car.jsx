import React from "react";

import "../assets/css/car.css";
import astronaut6 from "../assets/img/astronauta6.png";

export default class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      db: [],
    };
    this.exibirProdutos();
  }
  // -------------------------------------   Api Produtos
  exibirProdutos() {
    fetch(
      "http://localhost/RECODE_Pro/GUERREIRO%20JEDI/REACT/FullStackEletro/fseletro/src/Backend/Api_Pedidos.php"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          db: responseJson,
        });
      });
  }

  render() {
    return (
      <>
        <div className="header">
          <div className="container">Carrinho</div>
        </div>
        <div className="section">
          <div className="car">
            <table class="table table-hover table-responsive">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Cliente</th>
                  <th scope="col">Descrição</th>
                  <th scope="col">Unidade</th>
                  <th scope="col">Quant.</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                {this.state.db.map((row) => (
                  <tr>
                    <th scope="row">{row.idpedidos}</th>
                    <td>{row.nomeCliente}</td>
                    <td>{row.descricao}</td>
                    <td>{row.precofinal}</td>
                    <td>{row.quantidade}</td>
                    <td>{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <img className="astronaut6" src={astronaut6} alt="" />
      </>
    );
  }
}
