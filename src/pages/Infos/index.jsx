import React from "react";
import wave3 from "../../assets/waves/home/waveGreenInverted.svg";
import wave2 from "../../assets/waves/home/waveInvertedTransparent.svg";
import piramide from "../../assets/infos/piramidealimentarRemovebg.png";
import adipometro from "../../assets/infos/adipometro.webp";
import modulo from "../../assets/infos/escaladebristol.png";
import health from "../../assets/infos/womanHealth.png";
import "./style.css";
import Imc from "./components/ImcCalculator";
import waveTransparent from "../../assets/waves/home/waveTransparent.svg";
import waveGreen from "../../assets/waves/home/waveGreen.svg";

export default function Infos() {
  return (
    <>
      <div className="headerEducation">
        <img src={wave2} alt="background wave" className="greenInv1" />
        <img src={wave3} alt="background wave" className="greenInv3" />
      </div>
      <Imc />
      <div className="headerEducation">
        <img src={wave2} alt="background wave" className="greenInv1" />
        <img src={wave3} alt="background wave" className="greenInv3" />
      </div>
      <div className="containerInfos">
        <h2>COMO FUNCIONA O ACOMPANHAMENTO NUTRICIONAL</h2>
        <li>
          Após agendamento da consulta, você receberá por email um
          questionário pré-consulta, para me preparar para o seu atendimento;
        </li>
        <li>
          Já em consulta faremos uma anamnese detalhada para te conhecer
          melhor e assim te proporcionar um atendimento ainda mais
          personalizado;
        </li>
        <li>Ainda em consulta conversaremos sobre seus objetivos, rotinas,
          rastreamento metabólico e interpretação de exames laboratoriais
          (quando houver), se não, serão solicitados;
        </li>
        <li>
          Avaliação de composição corporal através de dobras cutâneas e
          bioimpedância (para analisar percentual de gordura e massa magra),
          circunferências, e registro de fotos para obtermos parâmetros de
          evolução;
        </li>
        <li>
          Após uma semana nos encontramos novamente para a entrega do seu
          plano alimentar personalizado com orientações e receitas.
        </li>

        <ul className="details">
          <li>
            A primeira consulta tem duração de 01:30h a 02:00h, dependendo de
            cada caso.
          </li>
          <li>
            Os retornos (que devem ser a cada 30 dias) tem duração em média de
            01:00h.
          </li>
          <li>
            Durante o período de tratamento o cliente terá acesso ao meu
            WhatsApp para tirar dúvidas e acompanhamento.
          </li>
        </ul>
        <div className="healthType">
          <div className="boxType">
            <h1>Saúde da mulher</h1>
            <div className="rowInfo">
              <p>
                A mulher passa por diversas fases ao longo da vida adulta que
                requerem atenção com a alimentação devido as suas
                peculiaridades. Sendo que em cada fase necessita de cuidados
                específicos e estratégias para promover saúde e qualidade de
                vida. Cuidados na Tensão Pré Menstrual, Síndrome dos Ovários
                Policísticos, Endometriose, Candidíase e Menopausa. Além dos
                cuidados com unhas, cabelos e pele que sofrem transformações
                devido a cada fase vivida pela mulher, e também no processo de
                envelhecimento. A alimentação pode ter uma interferência direta,
                pois alguns alimentos possuem benefícios para a prevenção e
                auxiliam no tratamento de diversas doenças e distúrbios que
                ocorrem na vida da mulher.
              </p>
              <img src={health} alt="Saúde da mulher" className="imgInfo" />
            </div>
          </div>
          <div className="boxType">
            <h1>Modulação intestinal</h1>
            <div className="rowReverseInfo">
              <p>
                Já sabemos da importância do nosso intestino, que hoje é
                considerado como nosso segundo cérebro. A modulação Intestinal é
                um conjunto de intervenções aplicadas ao trato gastrointestinal,
                com o objetivo principal de reequilibrar as proporções de
                bactérias que compõe a microbiota. A restauração da composição
                da microbiota intestinal deve ser realizada em termos
                qualitativos e quantitativos, de modo que diminua a incidência
                de bactérias patogênicas, em sua maioria responsáveis por esses
                desequilíbrios. Com a modulação da microbiota intestinal é
                possível obter diversos benefícios, como melhora dos sintomas
                gastrointestinais, disposição, fortalecimento do sistema
                imunológico, entre outros.
              </p>
              <img
                src={modulo}
                alt="escala de bristol de obstipação"
                className="imgInfo"
              />
            </div>
          </div>
          <div className="boxType">
            <h1>Avaliação Nutricional</h1>
            <div className="rowInfo">
              <p>
                O objetivo da avaliação nutricional é de identificar o estado
                nutricional e assim reconhecer quais as necessidades alimentares
                cada indivíduo possui. Dessa forma, é possível intervir
                adequadamente para a manutenção ou recuperação da saúde. A
                identificação dos distúrbios e riscos nutricionais, assim como a
                gravidade deles, ajuda a definir quais as medidas devem ser
                adotadas como respostas às intervenções nutricionais.
              </p>
              <img
                src={adipometro}
                alt="foto de Adipometro"
                className="imgInfo"
              />
            </div>
          </div>
          <div className="boxType">
            <h1>Educação Nutricional </h1>
            <div className="rowReverseInfo">
              <p>
                Ouvimos sempre sobre reeducação alimentar, porém acredito que
                muitos aprendem hábitos que parecem saudáveis, mas podem
                prejudicar a sua saúde. Recebendo acompanhamento adequado de um
                nutricionista, é possível corrigir hábitos alimentares que foram
                aprendidos e enraizados. Através das consultas é possível
                substituir os mesmos por outros saudáveis que atendam às
                necessidades atuais de cada momento da vida do indivíduo, desta
                forma, adequando bons hábitos à sua rotina e as suas
                preferências.Junto com a tabela nutricional que contém alimentos
                escolhidos para o seu tratamento. Utilizada para evitar a
                monotonia alimentar, é útil para variar a sua alimentação, desta
                forma, permanece a quantidade de calorias e macronutrientes da
                sua dieta, indicados pelo profissional de nutrição sem
                prejudicar seu objetivo.
              </p>
              <img
                src={piramide}
                alt="Pirâmide alimentar"
                className="imgInfo"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        src={waveTransparent}
        alt="background wave"
        className="waveTransparent"
      />
      <img src={waveGreen} alt="background wave" className="waveGreen" />
    </>
  );
}
