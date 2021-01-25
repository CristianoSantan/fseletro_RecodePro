import React, { Component } from "react";
import "./style.css";

export default class Card extends React.Component {
  destaqueProd(event) {
    let tam = event.target.style.height;
    let estilo = ""

    tam == "210px" ? estilo = "height: 190px" : estilo = "height: 210px; margin-top: 10px";

    event.target.style = estilo
  }

  render() {
    return (
      <div className="section-cards container row">
        {this.props.arrayProdutos.map((row) => (
          <div
            className="card-produto col-lg-3 col-md-4 col-sm-6 col-xs-9"
            id={row.categoria}
          >
            <img
              src={row.imagem}
              onMouseOver={this.destaqueProd}
              onMouseOut={this.destaqueProd}
              id={row.idproduto}
            />
            <p>{row.descricao}</p>
            <p>R$ {row.preco}</p>
            <p>R$ {row.precofinal}</p>
          </div>
        ))}
      </div>
    );
  }
}
