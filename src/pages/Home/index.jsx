import React from "react";
import wave1 from "../../assets/waves/home/colorwavebg.png";
import wave3 from "../../assets/waves/home/newWave3.png";
import whatsapp from "../../assets/logos/whatsOriginal.webp";
import "./style.css";

export default function Home() {
  const whatsappNumber = 4199166424;

  function handleOpenWhatsapp(whatsappNumber) {
    const whatsappLink = `https://wa.me/55${whatsappNumber}?text=Olá,%20Gostaria%20de%20melhorar%20minha%20alimentação,%20pode%20me%20ajudar?`;
    window.open(whatsappLink);
  }
  return (
    <div id="home" className="containerHome">
      <img src={wave1} alt="background wave" className="wave1" />
      <img src={wave3} alt="background wave" className="wave2" />
      <img
        src={whatsapp}
        className="whatsApp"
        alt="whatsApp contact"
        onClick={() => handleOpenWhatsapp(whatsappNumber)}
      />
    </div>
  );
}
