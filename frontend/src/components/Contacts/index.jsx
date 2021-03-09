import React, { useState } from "react";

import email from "../../assets/img/email.png";
import wtz from "../../assets/img/whatsapp.png";

export default function Contacts() {
  const [msg, setMsg] = useState({
    formSave: false,
    type: "",
    message: "",
  });
  const [formData, setFormData] = useState({
    nome: "",
    msg: "",
  });

  // ------------------------------ Postagens formulario
  const sendForm = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://fseletro-backend.herokuapp.com/messages", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      }).then((dados) => {
        setFormData({
          nome: "",
          msg: "",
        });
      });

      const responseEnv = await res.json();

      if (responseEnv.error) {
        setMsg({
          formSave: false,
          type: "error",
          message: responseEnv.message,
        });
      } else {
        setMsg({
          formSave: false,
          type: "success",
          message: responseEnv.message,
        });
      }
    } catch (err) {
      setMsg({
        formSave: false,
        type: "error",
        message: "Erro: mensagem não cadastrada, tente mais tarde!",
      });
    }
    setTimeout(() => {
      setMsg(false);
    }, 2000);
  };

  const onChangeInput = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div>
      <div className="contacts col-lg-3 col-md-4 col-sm-6 col-xs-9">
        <div className="wtz">
          <img src={wtz} alt="whatsapp" />
          <p>(11) 98877-4433</p>
        </div>
        <div className="email">
          <img src={email} alt="email" />
          <p>contato@fseltro.com</p>
        </div>
        <form onSubmit={sendForm} name="form">
          <div className="form-group">
            <input
              value={formData.nome}
              onChange={onChangeInput}
              type="text"
              className="form-control"
              id="nome"
              name="nome"
              placeholder="Nome:"
            />
            <input
              value={formData.msg}
              onChange={onChangeInput}
              type="text"
              className="form-control"
              id="msg"
              name="msg"
              placeholder="Mensagem:"
            />
            <input
              type="submit"
              name="submit"
              className="btn btn-block"
              value="Enviar"
            />
            {msg.type === "success" ? (
              <div
                className="alert alert-success position-absolute mx-auto mt-4 w-50 text-center"
                role="alert"
              >
                <span className="lead text-dark">{msg.message}</span>
              </div>
            ) : (
              ""
            )}
            {msg.type === "error" ? (
              <div
                className="alert alert-danger position-absolute mx-auto mt-4 w-50 text-center"
                role="alert"
              >
                <span className="lead text-dark">{msg.message}</span>
              </div>
            ) : (
              ""
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
