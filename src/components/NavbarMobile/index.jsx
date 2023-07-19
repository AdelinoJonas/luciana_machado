import React, { useEffect, useRef, useState } from "react";
import { RiMenuLine } from "react-icons/ri";
import logoLu from "../../assets/logos/logo.png";
import logoMobile from "../../assets/logos/MarcaD'águaLogo1.png";
import "./styles.css";
import { useNavigate } from "react-router";
import { Link, useLocation } from "react-router-dom";

export default function NavbarMobile() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [openMenu, setOpenMenu] = useState(false);

  function handleToggleMenu() {
    setOpenMenu(!openMenu);
  }

  const handleHome = (e) => {
    const clickedLink = e.target.getAttribute("href");
    if (pathname !== clickedLink) {
      window.scrollTo(0, 0);
    }
  };

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

  const [activeItem, setActiveItem] = useState("home");

  const handleClick = (e, item) => {
    setActiveItem(item);
    const clickedLink = e.target.getAttribute("href");

    if (pathname !== clickedLink) {
      const targetElement = document.getElementById(clickedLink.slice(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });

        setTimeout(() => {
          window.location.href = clickedLink;
        }, 500);
      }
    }
  };

  return (
    <div className="containerNav">
      <a onClick={handleToggleMenu}>
        <RiMenuLine className="menu" />
      </a>
      <img src={logoLu} alt="logo" className="logoHeader" onClick={handleHome} />
      {openMenu && (
        <div onClick={handleToggleMenu} className="boxdrop">
          <section className="sectionLogo">
            <div className="centerImg">
              <img
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                src={logoMobile}
                alt="logo"
                className="logoMenu"
              />
            </div>
            <ul className="container">
              <Link
                className={`container-item ${
                  activeItem === "home" ? "active" : ""
                }`}
                onClick={(e) => handleClick(e, "home")}
              >
                <a href="#home" className="link">
                  Início
                </a>
              </Link>
              <Link
                className={`container-item ${
                  activeItem === "about" ? "active" : ""
                }`}
                onClick={(e) => handleClick(e, "about")}
              >
                <a href="#about" className="link">
                  Quem sou
                </a>
              </Link>

              <Link
                className={`container-item ${
                  activeItem === "education" ? "active" : ""
                }`}
                onClick={(e) => handleClick(e, "education")}
              >
                <a href="#education" className="link">
                  Formação
                </a>
              </Link>

              <Link
                className={`container-item ${
                  activeItem === "specialities" ? "active" : ""
                }`}
                onClick={(e) => handleClick(e, "specialities")}
              >
                <a href="#specialities" className="link">
                  Especialidades
                </a>
              </Link>

              <Link
                className={`container-item ${
                  activeItem === "infos" ? "active" : ""
                }`}
                onClick={(e) => handleClick(e, "infos")}
              >
                <a href="#infos" className="link">
                  Informações
                </a>
              </Link>

              <Link
                className={`container-item ${
                  activeItem === "contact" ? "active" : ""
                }`}
                onClick={(e) => handleClick(e, "contact")}
              >
                <a href="#contact" className="link">
                  Contato
                </a>
              </Link>
            </ul>
          </section>
        </div>
      )}
    </div>
  );
}
