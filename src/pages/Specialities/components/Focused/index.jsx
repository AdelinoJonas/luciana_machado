import { motion } from "framer-motion";
import dna from "../../../../assets/photos/dnaFood.jpg";
import fitxfat from "../../../../assets/photos/gorduraxmusculo.jpg";
import stetic from "../../../../assets/photos/stetic.png";
import waveGreen from "../../../../assets/waves/home/waveGreen.svg";
import wave1 from "../../../../assets/waves/home/waveInverted1.svg";
import wave2 from "../../../../assets/waves/home/waveInverted2.svg";
import wave3 from "../../../../assets/waves/home/waveInverted3.svg";
import waveTransparent from "../../../../assets/waves/home/waveTransparent.svg";
import { Reveal } from "../../../../utils/Reveal";
import clinic from "../assets/mockup6.png";
import "./style.css";

export default function Focused() {
  return (
    <div className="containerFocused">
      <div className="headerEducation">
        <img src={wave2} alt="background wave" className="waveInv3" />
        <img src={wave3} alt="background wave" className="waveInv2" />
        <img src={wave1} alt="background wave" className="waveInv1" />
      </div>
      <div id="specialities" className="boxEspecialities">
        <Reveal>
          <h1>Minhas especialidades</h1>
        </Reveal>
        <div className="descriptionEspec">
          <Reveal>
            <h2>NUTRIÇÃO ESTÉTICA</h2>
          </Reveal>
          <div className="especRowList">
            <div className="especItem">
              <Reveal>
                <p>
                  Em nossa sociedade é marcante a importância dada à beleza,
                  peso ideal, estética e ao bem-estar. Nesse contexto da busca
                  de manter-se por mais tempo com a aparência jovial a nutrição
                  vem sendo cada vez mais valorizada, pois está totalmente
                  envolvida na prevenção de doenças e do envelhecimento precoce
                  e nessa busca pela aparência ideal, e a estética tão sonhada
                  por muitas pessoas inclui modificações no padrão alimentar.
                </p>
              </Reveal>
              <Reveal>
                <p>
                  Quando essa mudança alimentar não acontece de forma adequada,
                  surgem as deficiências. Diversos nutrientes são fundamentais
                  para restabelecer o equilíbrio e manutenção de uma vida
                  saudável e potencializar procedimentos estéticos invasivos ou
                  não.
                </p>
              </Reveal>
            </div>
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 1, delay: 0.25 }}
              src={stetic}
              alt="Estética exemplo"
              className="steticImg"
            />
          </div>
          <div className="especRowInvertList">
            <div className="especItem">
              <Reveal>
                <p>
                  A nutrição estética consiste em implementar mudanças
                  nutricionais que também atenda às necessidades dos pacientes
                  em relação aos resultados dos procedimentos estéticos.
                  Entender as necessidades nutricionais de cada indivíduo
                  colabora diretamente para o sucesso e manutenção dos
                  tratamentos estéticos.
                </p>
              </Reveal>
              <Reveal>
                <p>
                  A orientação nutricional é importante na Estética porque o
                  profissional avalia as necessidades do paciente e orienta o
                  consumo daqueles alimentos e nutrientes que vão contribuir
                  para o resultado desejado.
                </p>
              </Reveal>
            </div>
            <motion.img
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 1, delay: 0.25 }}
              src={dna}
              alt="Estética exemplo"
              className="steticImg"
            />
          </div>
        </div>
        <div className="descriptionEspec">
          <Reveal>
            <h2>NUTRIÇÃO ClÍNICA</h2>
          </Reveal>
          <div className="especRowList">
            <div className="especItem">
              <Reveal>
                <p>
                  Durante toda a vida o organismo passa por várias etapas em que
                  a alimentação se torna fundamental para a manutenção da saúde.
                  A nutrição clínica é uma área que se concentra no tratamento,
                  promoção da saúde e prevenção de doenças, por meio de
                  alimentos e suplementos.
                </p>
              </Reveal>
              <Reveal>
                <p>
                  Os princípios fundamentais da nutrição clínica são a avaliação
                  adequada, o diagnóstico preciso do problema, a intervenção,
                  que começa com o planejamento da dieta de acordo com
                  necessidades individuais, e o monitoramento dos resultados.
                </p>
              </Reveal>
            </div>
            <motion.img
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 1, delay: 0.25 }}
              src={clinic}
              alt="Estética exemplo"
              className="steticImg"
            />
          </div>
          <div className="especColumnList">
            <div className="especItem">
              <Reveal>
                <p>
                  A avaliação em nutrição adequada inclui dados coletados de
                  histórico familiar, hábitos relacionados à alimentação, sinais
                  físicos, dados antropométricos e, também, bioquímicos. O
                  planejamento e a implementação da dieta devem ser baseados nos
                  hábitos alimentares, estilo de vida, condições de saúde,
                  incluindo outros fatores.
                </p>
              </Reveal>
              <Reveal>
                <p>
                  A ingestão adequada de nutrientes como: vitaminas, minerais,
                  proteínas, lipídios e carboidratos, são essenciais para o bom
                  funcionamento do organismo, e devem ser alcançadas através da
                  alimentação e por meio de suplementação quando houver
                  necessidade.
                </p>
              </Reveal>
              <Reveal>
                <p>
                  Além disso, a nutrição clínica preocupa-se em evitar o
                  desenvolvimento de doenças crônicas, como diabetes e
                  hipertensão, por meio da manutenção de dieta saudável.
                </p>
              </Reveal>
            </div>
            <ul className="cardContainer">
              <Reveal>
                <li className="card">
                  Nutrição Clínica (diabetes, hipercolesterolemia, esteatose
                  hepática e hipertensão)
                </li>
                <li className="card">
                  Emagrecimento, Nutrição Estética (celulite, flacidez e gordura
                  localizada)
                </li>
                <li className="card">
                  Nutrição na Saúde da Mulher (menopausa, ovários policísticos,
                  acne e envelhecimento saudável)
                </li>
                <li className="card">
                  Ganho de massa muscular (praticantes de atividades físicas)
                </li>
              </Reveal>
            </ul>
          </div>
          <Reveal>
            <div className="fatImage">
              <img src={fitxfat} alt="Estética exemplo" className="fatImg" />
            </div>
          </Reveal>
        </div>
      </div>

      {/* <footer> */}
      <img
        src={waveTransparent}
        alt="background wave"
        className="waveTransparent"
      />
      <img src={waveGreen} alt="background wave" className="waveGreen" />
      {/* </footer> */}
    </div>
  );
}
