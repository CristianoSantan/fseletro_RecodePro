import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import "../assets/css/cart.css";
import astronaut6 from "../assets/img/astronauta6.png";

export default function Cart() {

  const compras = useSelector(state => state.carrinho)
  const [arrayCart, setArrayCart] = useState([]);

  // -------------------------------------   Api Pedidos
  useEffect(async () => {
    const response = await fetch("http://localhost:3001/carrinho");
    setArrayCart(await response.json());
  }, []);

  return (
    <>
      <div className="header">
        <div className="container">Carrinho</div>
      </div>
      <div className="section">
        <div className="car table-responsive p-5">

        <table class="table table-hover text-center">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">categoria</th>
                <th scope="col">Descrição</th>
                <th scope="col">R$ Unidade</th>
                <th scope="col">Quant.</th>
                <th scope="col">R$ Total</th>
              </tr>
            </thead>
            <tbody>
              {compras.map((buy) => (
                <tr>
                  <th scope="row">{buy.id}</th>
                  <td>{buy.categoria}</td>
                  <td>{buy.descricao}</td>
                  <td>{buy.precofinal}</td>
                  <td> x </td>
                  <td> x </td>
                </tr>
              ))}
            </tbody>
          </table>


          {/* <table class="table table-hover text-center">
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
              {arrayCart.map((buy) => (
                <tr>
                  <th scope="row">{buy.idpedidos}</th>
                  <td>{buy.nomeCliente}</td>
                  <td>{buy.descricao}</td>
                  <td>{buy.precofinal}</td>
                  <td>{buy.quantidade}</td>
                  <td>{buy.total}</td>
                </tr>
              ))}
            </tbody>
          </table> */}
        </div>
      </div>
      <img className="astronaut6" src={astronaut6} alt="" />
    </>
  );
}
