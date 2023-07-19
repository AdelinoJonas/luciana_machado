import React from "react";
import wave3 from "../../assets/waves/home/waveInverted3.svg";
import wave2 from "../../assets/waves/home/waveInverted2.svg";
import wave1 from "../../assets/waves/home/waveInverted1.svg";
import nutri from "../../assets/photos/Mockup5.jpg";
import "./style.css";
import Focused from "./components/Focused";
import newWave from "../../assets/waves/home/newWave3.png";

export default function Education() {
  return (
    <>
      <div id="education" className="containerEducation">
        <div className="headerEducation">
          <img src={wave2} alt="background wave" className="waveInverted1" />
          <img src={wave3} alt="background wave" className="waveInverted2" />
          <img src={wave1} alt="background wave" className="waveInverted2" />
        </div>
        <div className="boxEducation">
          <h1>Um pouco da minha formação...</h1>
          <div className="descriptionEducation">
            <ul className="educationList">
              <li className="educationItem">
                Nutricionista formada em 2006 pelas Faculdades Integradas
                Espírita em Curitiba.
              </li>
              <li className="educationItem">
                Especialização em Nutrição Clínica pela Universidade Federal do
                Paraná
              </li>
              <li className="educationItem">
                Mestre em Biotecnologia - Universidade Positivo
              </li>
              <li className="educationItem">
                Estética e Dermocosmética Avançada Internacional pela Faculdade
                Inspirar.
              </li>
              <li className="educationItem">
                Possuo vários cursos de atualização na área de Nutrição e Saúde
                da Mulher, Emagrecimento entre outros.
              </li>
            </ul>
            <div className="imgKnowledge">
              <img src={nutri} alt="nutricionista" className="nutriImg" />
            </div>
          </div>
          <ul className="miniCardsContainer">
            <li className="miniCard">
              Como missão priorizo um tratamento individualizado para a
              conquista de seus objetivos e metas, na busca de saúde e qualidade
              de vida.
            </li>
            <li className="miniCard">
              Ajudando de forma simples e objetiva o processo de mudanças de
              hábitos alimentares permanentes e duradouros.
            </li>
            <li className="miniCard">
              Viabilizo atendimentos on-line para pacientes de todo o Brasil e
              para brasileiros que moram no exterior.
            </li>
          </ul>
        </div>
        <img src={newWave} alt="background wave" className="newWave" />
      </div>
      <Focused />
    </>
  );
}
