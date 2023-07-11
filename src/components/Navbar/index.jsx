import React from "react";
import logo from "../../assets/logos/MarcaD'águaLogo3.png";
import "./styles.css";

export default function Navbar() {
  return (
    <div className="containerNavbar">
      <img src={logo} alt="logo" className="logoweb" />
      <ul className="allItems">
        <li exact="true" active="true" to="/">
          Início
        </li>

        <li active="false" to="/about">
          Quem sou
        </li>

        <li active="false" to="/services">
          Especialidades
        </li>

        <li active="false" to="/calculator">
          Calculadora IMC
        </li>

        <li active="false" to="/News">
          Curiosidades
        </li>

        <li active="false" to="/contact">
          Contato
        </li>
      </ul>
    </div>
  );
}
