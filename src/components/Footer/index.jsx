import React from "react";
import logo from "../../assets/logos/logo.png";
import "./styles.css";

export default function Footer() {
  const currentYear = new Date();
  const year = currentYear.getFullYear();

  return (
    <div className="containerFooter">
      <img src={logo} alt="logo" />
      <p>Luciana Machado - Nutricionista&copy;&reg;{year}</p>
    </div>
  );
}
