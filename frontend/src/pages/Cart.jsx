import React, { lazy, Suspense } from "react";
import "../assets/css/cart.css";
import astronaut6 from "../assets/img/astronauta6.png";

const TableCart = lazy(() => import('../components/TableCart'));
// const Requests = lazy(() => import('../components/Requests'));

export default function Cart() {

  return (
    <>
      <div className="header">
        <div className="container">Carrinho</div>
      </div>
      <div className="section">
        <div className="car table-responsive p-5 w-100">

          <Suspense fallback={<p>Carregando...</p>}>
            <TableCart />
          </Suspense>          

          {/* <Suspense fallback={<p>Carregando...</p>}>
            <Requests />
          </Suspense> */}
          
        </div>
      </div>
      <img className="astronaut6" src={astronaut6} alt="" />
    </>
  );
}
