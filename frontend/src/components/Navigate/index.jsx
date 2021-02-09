import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { VscMenu } from "react-icons/vsc";

import "./styles.css";
import logo from "../../assets/img/Full-Stack_logo.svg";

export default function Nav() {
  const carrinhoSize = useSelector((state) => state.carrinho.length);

  return (
    <>
      <nav id="menu" className="navbar navbar-expand-lg">
        <div id="content-menu" className="container w-100">
          <NavLink className="navbar-brand w-25" to="/">
            <img width="110px" src={logo} alt="Logo" />
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapseNavbar"
            aria-controls="collapseNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span><VscMenu /></span>
          </button>

          <div className="collapse navbar-collapse w-75 menuDropdown" id="collapseNavbar">
            <ul className="nav w-100 d-flex justify-content-between flex-column flex-sm-row ">
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  <span>Produto</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/shop">
                  <span>Lojas</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  <span>Contato</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link mr-5" to="/cart">
                  <span>
                    Carrinho
                    <div className="counter">{carrinhoSize}</div>
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
