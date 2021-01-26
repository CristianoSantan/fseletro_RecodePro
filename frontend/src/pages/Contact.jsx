import React, { useState } from "react";

import "../assets/css/contact.css";
import email from "../assets/img/email.png";
import wtz from "../assets/img/whatsapp.png";
import astronaut5 from "../assets/img/astronauta5.png";

export default function Contact() {
  // const [student, setStudent] = useState([]);
  // const [render, setRender] = useState(false);
  // const [msg, setMsg] = useState(false);
  // const [emptyField, setEmptyField] = useState(true);
  // const [formData, setFormData] = useState({
  //   nome: '',
  //   msg: '',
  // });

  // useEffect(async () => {
  //   const url = "http://localhost/RECODE_Pro/GUERREIRO%20JEDI/REACT/FullStackEletro/fseletro/src/Backend/Api_Mensagens.php";
  //   const response = await fetch(url);
  //   setStudent(await response.json());
  // }, [render]);

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   //console.log(event.target);
  //   const json = JSON.stringify(formData);

  //   const url = "http://localhost/RECODE_Pro/GUERREIRO%20JEDI/REACT/FullStackEletro/fseletro/src/Backend/Api_Mensagens.php";

  //   const options = {
  //     //dois parametros POST
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: json,
  //   }

  //   fetch(url, options)
  //     .then((response) => response.json())
  //     .then((dados) => {
  //       setRender(!render);
  //       setMsg(dados); //Configurado para verdadeiro
  //       document.getElementByTagName('form')[0].reset();

  //       setTimeout(() => {
  //         setMsg(false);
  //         setEmptyField(true);
  //       }, 2000);
  //     });
  // }

  // const handleChange = (event) => {
  //   // Checking if it's empty or not
  //   const nome = document.getElementById('nome').value;
  //   const msg = document.getElementById('msg').value;
  //   nome === '' || msg === '' ? setEmptyField(true) : setEmptyField(false);

  //   // Updating formData object
  //   setFormData({
  //     ...formData,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  // const [student, setStudent] = useState([]);
  // const [render, setRender] = useState(false);
  // const [msg, setMsg] = useState(false);
  // const [nome, setNome] = useState("");
  // const [mensagem, setMensagens] = useState("");

  // useEffect(async () => {
  //   const url = "http://localhost:3001/messages";
  //   const response = await fetch(url);
  //   setStudent(await response.json());
  // });

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   console.log(event.target);
  //   const formData = new FormData(this);

  //   const url = "http://localhost:3001/messages";

  //   fetch(url, {
  //     //dois parametros POST
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: formData,
  //   })
  //     .then((response) => response.json())
  //     .then((dados) => {
  //       setRender(!render);
  //       setMensagens("");
  //       setNome("");
  //       setMsg(dados); //Configurado para verdadeiro
  //       setTimeout(() => {
  //         setMsg(false);
  //       }, 2000);
  //     });
  // }

  const [msg, setMsg] = useState({
    formSave: false,
    type: "",
    message: "",
  });
  const [formData, setFormData] = useState({
    nome: "",
    msg: "",
  });

  const onChangeInput = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const sendForm = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3001/messages", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
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
  };

  const formatDate = (rawDate) => {
    const myDate = new Date(rawDate);
    const d = myDate.getDay();
    const mo = myDate.getMonth() + 1;
    const y = myDate.getFullYear();
    const h = myDate.getHours();
    const mi = myDate.getMinutes();

    return `${d}/${mo}/${y} - ${h}:${mi}`;
  };

  return (
    <>
      <div className="header">
        <div className="container">Contato</div>
      </div>
      <div className="section container d-flex justify-content-between">
        <div className="contacts">
          <div className="wtz">
            <img src={wtz} alt="whatsapp" />
            <p>(11) 98877-4433</p>
          </div>
          <div className="email">
            <img src={email} alt="email" />
            <p>contato@fseltro.com</p>
          </div>
          <form onSubmit={sendForm}>
            <div className="form-group">
              <input
                onChange={onChangeInput}
                type="text"
                className="form-control"
                id="nome"
                name="nome"
                placeholder="Nome:"
              />
              <input
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
        <div className="messages">
          <h4>Mensagens</h4>
          {/* {student.map((row) => (
            <div className="media text-muted pt-3  border-bottom">
              <svg
                className="bd-placeholder-img mr-2 rounded"
                width="32"
                height="32"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
                aria-label="Placeholder: 32x32"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#007bff"></rect>
                <text x="50%" y="50%" fill="#007bff" dy=".3em">
                  32x32
                </text>
              </svg>
              <div className="media-body pb-3 mb-0 small lh-125 border-gray">
                <div className="d-flex justify-content-between align-items-center w-100">
                  <strong className="text-gray-dark">{row.nome}</strong>
                  <p>{formatDate(row.data)}</p>
                </div>
                <p className="d-block">{row.msg}</p>
              </div>
            </div>
          ))} */}
        </div>
      </div>
      <img className="astronaut5" src={astronaut5} alt="" />
    </>
  );
}
