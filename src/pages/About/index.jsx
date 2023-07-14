import React from "react";
import perfil from "../../assets/waves/about/perfilbg.png";
import "./style.css";

export default function About() {
  const whatsappNumber = 4199166424;

  function handleOpenWhatsapp(whatsappNumber) {
    const whatsappLink = `https://wa.me/55${whatsappNumber}?text=Olá,%20Pode%20me%20ajudar%20com%20minha%20contabilidade?`;
    window.open(whatsappLink);
  }
  return (
    <div id="about" className="containerAbout">
      <h1>Bem-vindo(a) ao meu site!</h1>
      <div className="row">
        <div className="description">
          <p className="textDescription">
            Sou uma nutricionista apaixonada pela área da nutrição clínica e
            pela estética, que entendeu que alimentação e procedimentos
            estéticos podem trazer resultados incríveis para quem quer emagrecer
            de forma saudável e duradoura, tratando a pele além de garantir um
            envelhecimento adequado com beleza e bem-estar. Atendo ao público
            adulto em geral que necessite de mudanças nos hábitos alimentares e
            principalmente atendimento nutricional na Estética e Saúde da
            Mulher. Com planos alimentares personalizados.
          </p>
          <button
            className="contactButton"
            onClick={() => handleOpenWhatsapp(whatsappNumber)}
          >
            Entre em contato
          </button>
        </div>
        <div className="imgBox">
          <img className="face" src={perfil} alt="Meu rosto" />
        </div>
      </div>
    </div>
  );
}
