import React, { useState, useEffect } from "react";

export default function Requests() {
  const [arrayCart, setArrayCart] = useState([]);

  // -------------------------------------   Api Pedidos
  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch("http://localhost:3001/carrinho");
      setArrayCart(await response.json());
    }
    fetchMyAPI();
  }, []);
  
  return (
    <div>
      <table class="table table-hover text-center">
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
      </table>
    </div>
  );
}
