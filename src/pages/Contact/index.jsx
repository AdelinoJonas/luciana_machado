import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { BiLogoTelegram } from "react-icons/bi";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { ImWhatsapp } from "react-icons/im";
import wave1 from "../../assets/infos/waveGreenInverted.svg";
import wave2 from "../../assets/infos/waveInvert.svg";
import waveGreen from "../../assets/waves/home/waveGreen.svg";
import waveTransparent from "../../assets/waves/home/waveTransparent.svg";
import "./style.css";
import { Reveal } from "../../utils/Reveal";

export default function Contact() {
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
    <div className="containerContact">
      <div className="headerContact">
        <img src={wave1} alt="background wave" className="waveContact2" />
        <img src={wave2} alt="background wave" className="waveContact1" />
      </div>

      <div className="boxContact" id="contact">
        <div className="boxContactLeft">
          <Reveal>
            <h3>Contato:</h3>
          </Reveal>
          <p>
            <Reveal>
              Obrigada por visitar meu site. Estou muito feliz em poder te
              ajudar a alcançar uma vida mais saudável e equilibrada.
            </Reveal>
          </p>
          <p>
            <Reveal>
              Se você tiver alguma dúvida, sugestão ou gostaria de marcar uma
              consulta. Por favor entre em contato. Terei o prazer em responder
              o mais rápido possível.
            </Reveal>
          </p>
          <p>
            <Reveal>
              Você também pode me encontrar nas redes sociais. Me siga para
              receber dicas de nutrição, receitas saudáveis e ficar por dentro
              dos detalhes para manter uma saúde alimentar invejável.
            </Reveal>
          </p>

          <Reveal>
            <div className="linksContact">
              <ImWhatsapp
                onClick={() => handleOpenWhatsapp(whatsappNumber)}
                className="contactIcon"
              />
              <BiLogoTelegram
                onClick={() => openTelegram(whatsappNumber)}
                className="contactIcon"
              />

              <a
                href="https://www.facebook.com/lu.machado.os"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillFacebook className="contactIcon" />
              </a>
              <a
                href="https://www.instagram.com/nutri_lumachado/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsInstagram className="contactIcon" />
              </a>
              <a
                href="https://www.linkedin.com/in/luciana-machado-66767169"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin className="contactIcon" />
              </a>
            </div>
          </Reveal>
          <Reveal>
            <p className="emailContact">
              <HiOutlineMail className="emailIcon" />
              E-mail: nutrilumachado@gmail.com
            </p>
          </Reveal>
        </div>
        <div className="boxContactRight">
          <Reveal>
            <span>
              <CiLocationOn className="locationIcon" />
              Av. Rep. Argentina, 2275 - Água Verde, Curitiba - PR, 80610-260
            </span>
          </Reveal>

          <div className="location">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.152388751984!2d-49.2919364!3d-25.4665865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce37ad6952b4b%3A0x379554d9bf9aebfb!2sAv.%20Rep.%20Argentina%2C%202275%20-%20%C3%81gua%20Verde%2C%20Curitiba%20-%20PR%2C%2080610-260!5e0!3m2!1spt-BR!2sbr!4v1689887961405!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
            ></iframe>
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
