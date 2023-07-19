import React, { useState } from "react";
import logo from "../../assets/logos/MarcaD'águaLogo-Preto.png";
import "./styles.css";
import { Link, useLocation } from "react-router-dom";
import { AiTwotoneHome } from "react-icons/ai";
import { BsFillPersonBadgeFill } from "react-icons/bs";
import { PiStudentFill } from "react-icons/pi";
import { AiFillFolderOpen } from "react-icons/ai";
import { GrInfo } from "react-icons/gr";
import { GrContact } from "react-icons/gr";

export default function Navbar() {
  const { pathname } = useLocation();
  const [activeItem, setActiveItem] = useState("home");

  const handleClick = (e, item) => {
    setActiveItem(item);
    const clickedLink = e.target.getAttribute("href");

    if (pathname !== clickedLink) {
      const targetElement = document.getElementById(clickedLink.slice(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });

        setTimeout(() => {
          window.location.href = clickedLink; // Navega para o href após o atraso
        }, 500); // Ajuste o valor do atraso conforme necessário
      }
    }
  };

  const handleHome = (e) => {
    const clickedLink = e.target.getAttribute("href");
    if (pathname !== clickedLink) {
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="containerNavbar">
      <img src={logo} alt="logo" className="logoweb" onClick={handleHome} />

      <ul className="allItems">
        <Link
          className={`item ${activeItem === "home" ? "active" : ""}`}
          onClick={(e) => handleClick(e, "home")}
        >

          <a href="#home" className="link">
            Início
          </a>
        </Link>

        <Link
          className={`item ${activeItem === "about" ? "active" : ""}`}
          onClick={(e) => handleClick(e, "about")}
        >

          <a href="#about" className="link">
            Quem sou
          </a>
        </Link>

        <Link
          className={`item ${activeItem === "education" ? "active" : ""}`}
          onClick={(e) => handleClick(e, "education")}
        >

          <a href="#education" className="link">
            Formação
          </a>
        </Link>

        <Link
          className={`item ${activeItem === "specialities" ? "active" : ""}`}
          onClick={(e) => handleClick(e, "specialities")}
        >

          <a href="#specialities" className="link">
            Especialidades
          </a>
        </Link>

        <Link
          className={`item ${activeItem === "infos" ? "active" : ""}`}
          onClick={(e) => handleClick(e, "infos")}
        >

          <a href="#infos" className="link">
            Informações
          </a>
        </Link>

        <Link
          className={`item ${activeItem === "contact" ? "active" : ""}`}
          onClick={(e) => handleClick(e, "contact")}
        >

          <a href="#contact" className="link">
            Contato
          </a>
        </Link>
      </ul>
    </div>
  );
}


// import React, { useState } from "react";
// import logo from "../../assets/logos/MarcaD'águaLogo-Preto.png";
// import "./styles.css";
// import { Link, useLocation } from "react-router-dom";
// import { AiTwotoneHome } from "react-icons/ai";
// import { BsFillPersonBadgeFill } from "react-icons/bs";
// import { PiStudentFill } from "react-icons/pi";
// import { AiFillFolderOpen } from "react-icons/ai";
// import { GrInfo } from "react-icons/gr";
// import { GrContact } from "react-icons/gr";

// export default function Navbar() {
//   const { pathname } = useLocation();
//   const [activeItem, setActiveItem] = useState("home");

//   const handleClick = (e, item) => {
//     setActiveItem(item);
//     const clickedLink = e.target.getAttribute("href");
  
//     if (pathname !== clickedLink) {
//       const targetElement = document.getElementById(clickedLink.slice(1));
//       if (targetElement) {
//         targetElement.scrollIntoView({ behavior: 'smooth' });
  
//         setTimeout(() => {
//           window.location.href = clickedLink; // Navega para o href após o atraso
//         }, 500); // Ajuste o valor do atraso conforme necessário
//       }
//     }
//   };
  
//   const handleHome = (e) => {
//     const clickedLink = e.target.getAttribute("href");
//     if (pathname !== clickedLink) {
//       window.scrollTo(0, 0);
//     }
//   };

//   return (
//     <div className="containerNavbar">
//       <img src={logo} alt="logo" className="logoweb" onClick={handleHome}/>

//       <ul className="allItems">
//         <Link
//           className={`item ${activeItem === "home" ? "active" : ""}`}
//           onClick={() => handleClick("home")}
//         >
//           <AiTwotoneHome className="linkIcon" />
//           <a href="#home" className="link" >
//             Início
//           </a>
//         </Link>

//         <Link
//           className={`item ${activeItem === "about" ? "active" : ""}`}
//           onClick={() => handleClick("about")}
//         >
//           <BsFillPersonBadgeFill className="linkIcon" />
//           <a href="#about" className="link">
//             Quem sou
//           </a>
//         </Link>

//         <Link
//           className={`item ${activeItem === "education" ? "active" : ""}`}
//           onClick={() => handleClick("education")}
//         >
//           <PiStudentFill className="linkIcon" />
//           <a href="#education" className="link">
//             Formação
//           </a>
//         </Link>

//         <Link
//           className={`item ${activeItem === "specialities" ? "active" : ""}`}
//           onClick={() => handleClick("specialities")}
//         >
//           <AiFillFolderOpen className="linkIcon" />
//           <a href="#specialities" className="link">
//             Especialidades
//           </a>
//         </Link>

//         <Link
//           className={`item ${activeItem === "infos" ? "active" : ""}`}
//           onClick={() => handleClick("infos")}
//         >
//           <GrInfo className="linkIcon" />
//           <a href="#infos" className="link">
//             Informações
//           </a>
//         </Link>

//         <Link
//           className={`item ${activeItem === "contact" ? "active" : ""}`}
//           onClick={() => handleClick("contact")}
//         >
//           <GrContact className="linkIcon" />
//           <a href="#contact" className="link">
//             Contato
//           </a>
//         </Link>
//       </ul>
//     </div>
//   );
// }
