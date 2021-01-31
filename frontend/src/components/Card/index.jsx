import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import "./style.css";

export default function Card() {
  const dispatch = useDispatch();
  const [arrayProdutos, setArrayProdutos] = useState([]);

  // -------------------------------------   Api Products
  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch("http://localhost:3001/products");
      setArrayProdutos(await response.json());
    }
    fetchMyAPI();
  }, []);

  // ------------------------------ Redux
  function handleAdd(buy) {
    dispatch({
      type: "ADD_COMPRA",
      buy,
    });
  }

  const destaqueProd = (event) => {
    let tam = event.target.style.height;
    let estilo = "";

    tam === "210px"
      ? (estilo = "height: 190px")
      : (estilo = "height: 210px; margin: 10px 0px");
    return (event.target.style = estilo);
  };

  return (
    <div className="section-cards container row justify-content-around my-5">
      {arrayProdutos.map((buy) => (
        <div
          key={buy.idproduto}
          className="card-produto col-lg-3 col-md-4 col-sm-6 col-xs-9"
          id={buy.categoria}
        >
          <img
            src={buy.imagem}
            onMouseOver={destaqueProd}
            onMouseOut={destaqueProd}
            id={buy.idproduto}
            alt=""
          />
          <p>{buy.descricao}</p>
          <p>R$ {buy.preco}</p>
          <p>R$ {buy.precofinal}</p>
          <button type="button" className="btn" onClick={() => handleAdd(buy)}>
            Comprar
          </button>
        </div>
      ))}
    </div>
  );
}
