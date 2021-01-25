import React from "react";

import "../assets/css/car.css";
import astronaut6 from "../assets/img/astronauta6.png";

export default function Car() {
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
              {/* {this.state.db.map(
                            row => */}
              <tr>
                <th scope="row">row.idpedidos</th>
                <td>row.nomeCliente</td>
                <td>row.descricao</td>
                <td>row.valorUnitario</td>
                <td>row.quantidade</td>
                <td>row.total</td>
              </tr>
              {/* )} */}
              <tr>
                <th scope="row">row.idpedidos</th>
                <td>row.nomeCliente</td>
                <td>row.descricao</td>
                <td>row.valorUnitario</td>
                <td>row.quantidade</td>
                <td>row.total</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <img className="astronaut6" src={astronaut6} alt="" />
    </>
  );
}
