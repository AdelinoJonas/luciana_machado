import React from "react";
import wave3 from "../../assets/waves/home/waveInverted3.svg";
import wave2 from "../../assets/infos/waveInvert.svg";
import orange from "../../assets/infos/waveOrange.svg";
import wave1 from "../../assets/infos/waveGreenInverted.svg";
import Map from "./components/Map";
import { ImWhatsapp } from "react-icons/im";
import { BsTelephoneInbound } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillFacebook } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
import waveTransparent from "../../assets/waves/home/waveTransparent.svg";
import waveGreen from "../../assets/waves/home/waveGreen.svg";
import "./style.css";

export default function Contact() {
  const latitude = -25.46646542017244;
  const longitude = -49.291925671164;

  const whatsappNumber = 4199166424;

  function handleOpenWhatsapp(whatsappNumber) {
    const whatsappLink = `https://wa.me/55${whatsappNumber}?text=Olá,%20Gostaria%20de%20melhorar%20minha%20alimentação,%20pode%20me%20ajudar?`;
    window.open(whatsappLink);
  }

  const openTelegram = (whatsappNumber) => {
    const whatsappLink = `https://t.me/55${whatsappNumber}`;
    window.open(whatsappLink);
  };

  return (
    <div id="contact" className="containerContact">
      <div className="headerContact">
        <img src={wave1} alt="background wave" className="waveContact2" />
        <img src={wave2} alt="background wave" className="waveContact1" />
      </div>

      <h3>Contato:</h3>
      <div className="boxContact">
        <div className="boxContactLeft">
          <p>
            Obrigada por visitar meu site. Estou muito feliz em poder te ajudar a alcançar uma vida mais saudável e equilibrada.
          </p>
          <p>
            Se você tiver alguma dúvida, sugestão ou gostaria de marcar uma consulta, por favor. Entre em contato, terei o prazer em responder o mais rápido possível.
          </p>
          <p>
            Você também pode me encontrar nas redes sociais. Me siga para receber dicas de nutrição, receitas saudáveis e ficar por dentro dos detalhes para manter uma saúde alimentar invejável.
          </p>
            
          <div className="linksContact">

            <ImWhatsapp onClick={() => handleOpenWhatsapp(whatsappNumber)} className="contactIcon"/>
            <BiLogoTelegram onClick={() => openTelegram(whatsappNumber)} className="contactIcon"/>

            <a href="https://www.facebook.com/lu.machado.os" target="_blank" rel="noopener noreferrer">
              <AiFillFacebook className="contactIcon"/>
            </a>
            <a href="https://www.instagram.com/nutri_lumachado/" target="_blank" rel="noopener noreferrer">
              <BsInstagram className="contactIcon"/>
            </a>
            <a href="https://www.linkedin.com/in/luciana-machado-66767169" target="_blank" rel="noopener noreferrer">
              <BsLinkedin className="contactIcon"/>
            </a>
            
          </div>
          <p className="emailContact">
            <HiOutlineMail className="emailIcon"/>
            E-mail: nutrilumachado@gmail.com
          </p>
        
        </div>
        <div className="boxContactRight">

          <span>
            <CiLocationOn className="contactIcon"/>
            Av. Rep. Argentina, 2275 - Água Verde, Curitiba - PR, 80610-260
          </span>

          <div className="location">
            <Map latitude={latitude} longitude={longitude} />
          </div>
        </div>
      </div>

      <img
        src={waveTransparent}
        alt="background wave"
        className="waveTransparent"
      />
      <img src={waveGreen} alt="background wave" className="waveGreen" />
    </div>
  );
}
