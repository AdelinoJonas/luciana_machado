import React from "react";
import logo from "../../assets/footer/LuLogo-removebg.png";
import jan from "../../assets/footer/logo.svg";
import "./styles.css";

export default function Footer() {
  const currentYear = new Date();
  const year = currentYear.getFullYear();

  return (
    <div className="containerFooter">
      <div className="leftFooter">
        <img src={logo} alt="logo" className="leftImg" />
        <p>Luciana Machado - Nutricionista&copy;&reg;{year}</p>
      </div>
      <div className="rightFooter">
        <a
          href="https://adelinoportfolio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={jan} alt="link para Jonas desenolvedor de software" />
        </a>
      </div>
    </div>
  );
}
