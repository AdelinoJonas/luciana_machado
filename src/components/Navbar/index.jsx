import React from "react";
import logo from "../../assets/logos/MarcaD'águaLogo-Preto.png";
import "./styles.css";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  const handleClick = (e) => {
    const clickedLink = e.target.getAttribute("href");
    if (pathname !== clickedLink) {
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="containerNavbar">
      <img src={logo} alt="logo" className="logoweb" onClick={handleClick} />

      <ul className="allItems">
        <li className="item" onClick={handleClick}>
          <a href="#home" className="link">
            Início
          </a>
        </li>

        <li className="item">
          <a href="#about" className="link">
            Quem sou
          </a>
        </li>

        <li className="item">
          <a href="#education" className="link">
            Formação
          </a>
        </li>

        <li className="item">
          <a href="#specialities" className="link">
            Especialidades
          </a>
        </li>

        <li className="item">
          <a href="#infos" className="link">
            Informações
          </a>
        </li>

        <li className="item">
          <a href="#contact" className="link">
            Contato
          </a>
        </li>
      </ul>
    </div>
  );
}
