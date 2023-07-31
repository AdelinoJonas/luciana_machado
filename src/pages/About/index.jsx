import React from "react";
import perfil from "../../assets/waves/about/perfilbg.png";
import { Reveal } from "../../utils/Reveal";
import "./style.css";
import { motion } from "framer-motion";

export default function About() {
  const whatsappNumber = 4199166424;

  function handleOpenWhatsapp(whatsappNumber) {
    const whatsappLink = `https://wa.me/55${whatsappNumber}?text=Olá,%20Gostaria%20de%20melhorar%20minha%20alimentação,%20pode%20me%20ajudar?`;
    window.open(whatsappLink);
  }
  return (
    <div id="about" className="containerAbout">
      <Reveal>
        <h1>Bem-vindo(a) ao meu site!</h1>
      </Reveal>
      <div className="row">
        <div className="description">
          <Reveal>
            <p className="textDescription">
              Meu nome é Luciana Machado, sou uma nutricionista apaixonada pela
              nutrição clínica, estética e pela docência! Com vasta experiência
              em nutrição clínica, trabalho com pessoas que possuem condições
              específicas de saúde, como diabetes, hipertensão e distúrbios
              alimentares, fornecendo orientação personalizada e planos
              alimentares adaptados às suas necessidades.
            </p>
          </Reveal>
          <Reveal>
            <p className="textDescription">
              Além disso, tenho um profundo interesse pela nutrição estética,
              compreendendo a relação entre a alimentação e a aparência física.
              Acredito que uma alimentação balanceada pode contribuir para a
              melhora da pele, cabelos e unhas, promovendo a beleza de dentro
              para fora. Por meio de abordagens nutricionais individualizadas,
              ajudo meus clientes a alcançarem seus objetivos estéticos de forma
              saudável e sustentável.
            </p>
          </Reveal>
          <Reveal>
            <p className="textDescription">
              Como entusiasta da docência, também dedico parte do meu tempo ao
              ensino e compartilhamento de conhecimento. Acredito que é
              essencial capacitar outras pessoas com informações atualizadas
              sobre nutrição e promover uma mudança de hábitos alimentares em
              nossa sociedade. Convido você a explorar meu site, onde você
              encontrará informações, dicas e recursos úteis para melhorar sua
              alimentação e qualidade de vida. Estou aqui para te apoiar em sua
              jornada rumo a uma vida mais saudável e feliz. Vamos começar
              juntos!
            </p>
          </Reveal>
          <Reveal>
            <button
              className="contactButton"
              onClick={() => handleOpenWhatsapp(whatsappNumber)}
            >
              Entre em contato
            </button>
          </Reveal>
        </div>
        <div className="imgBox">
          {/* <motion.img
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }} */}
          <img
            transition={{ duration: 1, delay: 0.25 }}
            className="face"
            src={perfil}
            alt="Meu rosto"
          />
        </div>
      </div>
    </div>
  );
}
