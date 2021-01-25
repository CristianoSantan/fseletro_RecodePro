import React, {useState, useEffect} from "react";

import "../assets/css/contact.css";
import email from "../assets/img/email.png";
import wtz from "../assets/img/whatsapp.png";
import astronaut5 from "../assets/img/astronauta5.png";

export default function Contact() {
  const [student, setStudent] = useState([]);
  const [render, setRender] = useState(false);
  const [msg, setMsg] = useState(false);
  const [emptyField, setEmptyField] = useState(true);
  const [formData, setFormData] = useState({
    nome: '',
    msg: '',
  });


  useEffect(async () => {
    const url = "http://localhost:3001/messages";
    const response = await fetch(url);
    setStudent(await response.json());
  }, [render]);

  function handleSubmit(event) {
    event.preventDefault();
    //console.log(event.target);
    const json = JSON.stringify(formData);

    const url = "http://localhost:3001/messages";

    const options = {
      //dois parametros POST
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: json,
    }

    fetch(url, options)
      .then((response) => response.json())
      .then((dados) => {
        setRender(!render);
        setMsg(dados); //Configurado para verdadeiro
        document.getElementByTagName('form')[0].reset();

        setTimeout(() => {
          setMsg(false);
          setEmptyField(true);
        }, 2000);
      });
  }

  const handleChange = (event) => {
    // Checking if it's empty or not
    const nome = document.getElementById('nome').value;
    const msg = document.getElementById('msg').value;
    nome === '' || msg === '' ? setEmptyField(true) : setEmptyField(false);

    // Updating formData object
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const formatDate = (rawDate) => {
    const myDate = new Date(rawDate);
    const d = myDate.getDay();
    const mo = myDate.getMonth();
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
          <form
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                id="nome"
                name="nome"
                placeholder="Nome:"
              />
              <input
                onChange={handleChange}
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
              {msg && (
                <div
                  className="alert alert-success position-absolute mx-auto mt-4 w-50 text-center"
                  role="alert"
                >
                  <span className="lead text-dark">
                    Mensagem enviada com sucesso!
                  </span>
                </div>
              )}
            </div>
          </form>
        </div>
        <div className="messages">
          <h4>Mensagens</h4>
          {student.map((row) => (
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
          ))}
        </div>
      </div>
      <img className="astronaut5" src={astronaut5} />
    </>
  );
}