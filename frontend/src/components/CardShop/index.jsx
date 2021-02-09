import React from "react";

import rj from "../../assets/img/Rio_de_Janeiro.jpg";
import sp from "../../assets/img/São_Paulo.jpg";
import sc from "../../assets/img/Santa_Cantarina.jpg";

export default function CardShop() {
  return (
    <div>
      <div className="section d-flex justify-content-center row w-100">
        <div className="location col">
          <img className="location-foto" src={rj} alt="rio de janeiro" />
          <p>Rio de Janeiro</p>
          <p>Av. Presidente Vargas, 5000 - 10º andar - Centro (21)3333-3333</p>
        </div>
        <div className="location col">
          <img className="location-foto" src={sp} alt="são paulo" />
          <p>São Paulo</p>
          <p>Av. Paulista, 985 - 3º andar - Jardins (11)4444-4444</p>
        </div>
        <div className="location col">
          <img className="location-foto" src={sc} alt="santa catarina" />
          <p>Santa Catarina</p>
          <p>Rua Major Ávila, 370 - Vila Mariana (47)5555-5555</p>
        </div>
      </div>
    </div>
  );
}
