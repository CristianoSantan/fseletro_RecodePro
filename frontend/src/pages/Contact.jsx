import React, { lazy, Suspense, useState } from "react";

import "../assets/css/contact.css";
import astronaut5 from "../assets/img/astronauta5.png";

const Message = lazy(() => import('../components/Message'));
const Contacts = lazy(() => import('../components/Contacts'));

export default function Contact() {
  
  const [render, setRender] = useState(false);

  return (
    <>
      <div className="header">
        <div className="container">Contato</div>
      </div>
      <div className="section d-flex justify-content-center my-5 row">

        <Suspense fallback={<p>Carregando...</p>}>
          <Contacts render={render} setRender={setRender} />
        </Suspense>

        <Suspense fallback={<p>Carregando...</p>}>
          <Message render={render} />
        </Suspense>
        
      </div>
      <img className="astronaut5" src={astronaut5} alt="" />
    </>
  );
}
