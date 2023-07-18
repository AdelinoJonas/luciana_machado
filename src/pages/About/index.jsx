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
            Sou uma nutricionista apaixonada pela nutrição clínica, estética e
            pela docência! Com vasta experiência em nutrição clínica, trabalho
            com pessoas que possuem condições específicas de saúde, como
            diabetes, hipertensão e distúrbios alimentares, fornecendo
            orientação personalizada e planos alimentares adaptados às suas
            necessidades.
          </p>
          <p className="textDescription">
            Além disso, tenho um profundo interesse pela nutrição estética,
            compreendendo a relação entre a alimentação e a aparência física.
            Acredito que uma alimentação balanceada pode contribuir para a
            melhora da pele, cabelos e unhas, promovendo a beleza de dentro para
            fora. Por meio de abordagens nutricionais individualizadas, ajudo
            meus clientes a alcançarem seus objetivos estéticos de forma
            saudável e sustentável.
          </p>
          <p className="textDescription">
            Como entusiasta da docência, também dedico parte do meu tempo ao
            ensino e compartilhamento de conhecimento. Acredito que é essencial
            capacitar outras pessoas com informações atualizadas sobre nutrição
            e promover uma mudança de hábitos alimentares em nossa sociedade.
            Convido você a explorar meu site, onde você encontrará informações,
            dicas e recursos úteis para melhorar sua alimentação e qualidade de
            vida. Estou aqui para te apoiar em sua jornada rumo a uma vida mais
            saudável e feliz. Vamos começar juntos!
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
