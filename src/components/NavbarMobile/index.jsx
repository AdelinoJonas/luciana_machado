import React, { useEffect, useRef, useState } from "react";
import { RiMenuLine } from "react-icons/ri";
import logo from "../../assets/logos/logo.png";
import "./styles.css";

export default function NavbarMobile() {
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
      {openMenu && (
        <div onClick={handleToggleMenu} className="boxdrop">
          <section onClick={() => navigate("/")}>
            <img src={logo} alt="light theme" />
          </section>
          <ul className="container">
            <li exact="true" active="true" to="/" onClick={handleToggleMenu}>
              Início
            </li>

            <li active="false" to="/about" onClick={handleToggleMenu}>
              Sobre nós
            </li>

            <li active="false" to="/services" onClick={handleToggleMenu}>
              Services
            </li>

            <li active="false" to="/customers" onClick={handleToggleMenu}>
              Clientes
            </li>

            <li active="false" to="/links" onClick={handleToggleMenu}>
              Links Uteis
            </li>

            <li active="false" to="/news" onClick={handleToggleMenu}>
              Notícias
            </li>

            <li active="false" to="/contact" onClick={handleToggleMenu}>
              Contato
            </li>
          </ul>
        </div>
      )}
      {/* <ul>
        <li>Início</li>
        <li>Quem sou</li>
        <li>Especialidades</li>
        <li>Contato</li>
      </ul> */}
    </div>
  );
}
