import React from "react";

import "./style.css";

import bandeiras from "../../assets/img/bandeiras.png";
import stacks from "../../assets/img/stacks.png";

export default function Footer() {
  return (
    <div className="main-footer">
      <div className="container section-1 w-100">
        <div className="w-33 text-center">
          <p>Formas de pagamento:</p>
          <img className="bandeiras" src={bandeiras} alt="forma de pagameto" />
        </div>
        <div className="w-33 text-center">
          <p className="mb-4">Criado por:</p>
          <div className="bio" >
            <div className="foto">
              <img
                src="https://avatars0.githubusercontent.com/u/65695476?s=460&u=3d179b94c652bc8e71ef89e160bad45e23d80422&v=4"
                alt="foto"
              />
            </div>
            <div className="text-left">
              <strong>Cristiano Santana</strong>
              <p>Developer</p>
            </div>
          </div>
        </div>
        <div className="stacks w-33 text-center">
          <p className="mb-5">Stacks usadas:</p>
          <img src={stacks} alt="stacks usadas" />
          {/* <img src={html} alt="HTML5" />
          <img src={css} alt="CSS3" />
          <img src={javascript} alt="JavaScrip" />
          <img src={react} alt="ReactJs" />
          <img src={node} alt="NodeJs" /> */}
        </div>
      </div>
      <div className="section-2">
        <p>&copy; RecodePro</p>
      </div>
    </div>
  );
}
