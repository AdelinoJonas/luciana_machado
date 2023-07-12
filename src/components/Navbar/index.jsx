import React from "react";
import logo from "../../assets/logos/MarcaD'águaLogo1.png";
import "./styles.css";
import { useNavigate } from "react-router";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="containerNavbar">
      <img src={logo} alt="logo" className="logoweb" />

      <ul className="allItems">
        
        <li className="item" exact="true" active="true" onClick={()=>{navigate("/")}}>
          Início
        </li>

        <li className="item" active="false" to="/about">
          Quem sou
        </li>

        <li className="item" active="false" to="/services">
          Especialidades
        </li>

        <li className="item" active="false" to="/calculator">
          Informações
        </li>

        <li className="item" active="false" to="/News">
          Acompanhamento
        </li>

        <li className="item" active="false" to="/contact">
          Contato
        </li>
      </ul>
    </div>
  );
}
