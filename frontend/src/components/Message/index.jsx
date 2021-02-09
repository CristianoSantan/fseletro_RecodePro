import React, { useState, useEffect } from "react";

export default function Message(render) {
  
  const [messages, setMessages] = useState([]);

  // ------------------------------ Api messages
  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch("http://localhost:3001/messages");
      setMessages(await response.json());
    }
    fetchMyAPI();
  }, [render]);
  
  // ------------------------------ Formatação da data de mensagens
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
    <div>
      <div className="messages col-lg-3 col-md-4 col-sm-6 col-xs-9">
        <h4>Mensagens</h4>
        {messages.map((row) => (
          <div key={row._id} className="media text-muted pt-3 border-bottom">
            <div className="media-body pb-3 mb-0 small lh-125 border-gray">
              <div className="d-flex justify-content-between align-items-center w-100">
                <strong className="text-gray-dark display-4">{row.nome}</strong>
                <p>{formatDate(row.data)}</p>
              </div>
              <p className="d-block">{row.msg}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
