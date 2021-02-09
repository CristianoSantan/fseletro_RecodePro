import React, { lazy, Suspense } from "react";

import "../assets/css/shop.css";
import astronaut4 from "../assets/img/astronauta4.png";

const CardShop = lazy(() => import('../components/CardShop'))

export default function Shop() {
  return (
    <>
      <div className="header">
        <div className="container">Lojas</div>
      </div>
      <div className="main container my-5 w-100">

        <Suspense fallback={<p>Carregando...</p>}>
          <CardShop />
        </Suspense>
        
      </div>
      <img className="astronaut4" src={astronaut4} alt="" />
    </>
  );
}
