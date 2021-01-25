import { NavLink } from "react-router-dom";
import React from "react";

import "./styles.css";

import logo from "../../assets/img/Full-Stack_logo.svg";

export default function Nav() {
  return (
    <>
      <nav id="menu" className="navbar navbar-expand-lg shadow">
        <div className="container w-100">
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
            
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse w-75 " id="collapseNavbar">
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
                <NavLink className="nav-link mr-5" to="/car">
                  <span>Carrinho</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
