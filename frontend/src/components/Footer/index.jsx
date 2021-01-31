import React from "react";

import "./style.css";

import bandeiras from "../../assets/img/bandeiras.png";
import stacks from "../../assets/img/stacks.png";

export default function Footer() {
  return (
    <div className="main-footer">
      <div className="section-1 w-100 row">
        <div className="bandeiras w-auto text-center col-lg-3 col-md-4 col-sm-6 col-xs-9">
          <p>Formas de pagamento:</p>
          <img className="" src={bandeiras} alt="forma de pagameto" />
        </div>
        <div className="bio w-auto text-center col-lg-3 col-md-4 col-sm-6 col-xs-9">
          <p>Criado por:</p>
          <div className="foto" >
              <img
                src="https://avatars0.githubusercontent.com/u/65695476?s=460&u=3d179b94c652bc8e71ef89e160bad45e23d80422&v=4"
                alt="foto"
              />
            <div className="text-left">
              <strong>Cristiano Santana</strong>
              <p>Developer</p>
            </div>
          </div>
        </div>
        <div className="stacks w-auto text-center col-lg-3 col-md-4 col-sm-6 col-xs-9">
          <p>Stacks usadas:</p>
          <img src={stacks} alt="stacks usadas" />
        </div>
      </div>
      <div className="section-2">
        <p>&copy; RecodePro</p>
      </div>
    </div>
  );
}
