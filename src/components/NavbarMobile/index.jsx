import React, { useEffect, useRef, useState } from "react";
import { RiMenuLine } from "react-icons/ri";
import logo from "../../assets/logos/logo.png";
import logoMobile from "../../assets/logos/MarcaD'águaLogo1.png";
import "./styles.css";
import { useNavigate } from "react-router";

export default function NavbarMobile() {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  function handleToggleMenu() {
    setOpenMenu(!openMenu);
  }

  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        handleToggleMenu();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenu, menuRef]);

  return (
    <div className="containerNav">
      <a onClick={handleToggleMenu}>
        <RiMenuLine className="menu" />
      </a>
      <img src={logo} alt="logo" className="logoHeader" />
      {openMenu && (
        <div onClick={handleToggleMenu} className="boxdrop">
          <section className="sectionLogo">
            <div className="centerImg">
              <img
                onClick={() => navigate("/")}
                src={logoMobile}
                alt="logo"
                className="logoMenu"
              />
            </div>
            <ul className="container">
              <li className="container-item" exact="true" active="true" to="/" onClick={handleToggleMenu}>
                Início
              </li>

              <li className="container-item" active="false" to="/about" onClick={handleToggleMenu}>
                Quem sou
              </li>

              <li className="container-item" active="false" to="/services" onClick={handleToggleMenu}>
                Especialidades
              </li>

              <li className="container-item" active="false" to="/customers" onClick={handleToggleMenu}>
                Calculadora IMC
              </li>

              <li className="container-item" active="false" to="/links" onClick={handleToggleMenu}>
                Curiosidades
              </li>

              <li className="container-item" active="false" to="/contact" onClick={handleToggleMenu}>
                Contato
              </li>
            </ul>
          </section>
        </div>
      )}
    </div>
  );
}
