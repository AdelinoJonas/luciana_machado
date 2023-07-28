import React, { useState } from "react";
import "./styles.css";
import newWave from "../../../../assets/waves/home/waveGreen.svg";

export default function Imc() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [message, setMessage] = useState("");

  const calculateIMC = () => {

    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);

    if (isNaN(weightValue) || isNaN(heightValue) || weightValue <= 0 || heightValue <= 0) {
      alert("Por favor, insira números positivos válidos para peso e altura.");
      return;
    }

    if (weight && height) {
      const imc = weightValue / (heightValue / 100) ** 2;
      let imcMessage = "";

      if (imc < 18.5) {
        imcMessage =
          "(Abaixo do Peso) - Ei, você é tão leve que poderia competir no levantamento de penas! Mas cuidado, vou ajudar você a ganhar peso de forma saudável. Que tal um plano alimentar com direito a sobremesa e tudo? Fale comigo, ficarei muito feliz em te ajudar!";
      } else if (imc >= 18.5 && imc < 24.9) {
        imcMessage =
          "(Peso normal) - Parabéns! Você está no seu peso ideal! Mas se quiser continuar assim, vou ser sua 'guardiã da balança' e te ajudar a manter essa forma física invejável. Se o seu resultado não te agradou, ou sente que poderia ser melhor. fale comigo, ficaria muito feliz em te ajudar!";
      } else if (imc >= 25 && imc < 29.9) {
        imcMessage =
          "(Sobrepeso) - Ei, olha só, você não está acima do peso, está apenas 'acumulando amor'! Vamos trabalhar juntos para encontrar um equilíbrio saudável e garantir que você possa saborear as delícias da vida sem preocupações! Se o seu resultado não te agradou, ou sente que poderia ser melhor. fale comigo, ficaria muito feliz em te ajudar!";
      } else if (imc >= 30 && imc < 34.9) {
        imcMessage =
          "(Obesidade Grau 1) - Seu IMC diz que você é oficialmente um 'rebelde das balanças'! Mas não se preocupe, estou aqui para te ajudar a desbravar esse caminho e voltar para o território do peso saudável. Vamos suar a camisa (literalmente) juntos! Se o seu resultado não te agradou, ou sente que poderia ser melhor. fale comigo, ficaria muito feliz em te ajudar!";
      } else if (imc >= 35 && imc < 39.9) {
        imcMessage =
          "(Obesidade Grau 2) - Ei, você é uma pessoa incrível, e agora temos um novo desafio: transformar a obesidade grau 2 em 'Grau de Determinação'! Estou aqui para oferecer apoio, compartilhar dicas e ajudá-lo a dar passos importantes rumo a uma vida mais saudável. Se o seu resultado não te agradou, ou sente que poderia ser melhor. fale comigo, ficaria muito feliz em te ajudar!";
      } else {
        imcMessage =
          "(Obesidade Grau 3) - Você é uma estrela brilhante, e vamos trazer todo esse brilho para a jornada de saúde! Juntos, vamos enfrentar a obesidade grau 3, conquistar pequenas vitórias e trabalhar para transformar o impossível em possível. Se o seu resultado não te agradou, ou sente que poderia ser melhor. fale comigo, ficaria muito feliz em te ajudar!";
      }

      setMessage(`Seu IMC é ${imc.toFixed(2)}kg/m² ${imcMessage}`);
    }
  };

  const whatsappNumber = 4199166424;

  function handleOpenWhatsapp(whatsappNumber) {
    const whatsappLink = `https://wa.me/55${whatsappNumber}?text=Olá,%20Pode%20me%20ajudar%20com%20minha%20contabilidade?`;
    window.open(whatsappLink);
  }

  return (
    <div className="calculator" id="infos">
      <h1>Você sabe o que é a Calculadora de IMC ?</h1>
      <section className="imcBody">
        <div className="imcDescription">
          <p>
            Basicamente, o IMC é um cálculo que leva em conta a sua altura e o
            seu peso. Ele diz se você está acima, abaixo ou no peso ideal. Não é
            uma fórmula perfeita, mas dá uma boa noção de como anda sua
            situação.
          </p>
          <p>
            Mas para que serve isso? Bom, o IMC ajuda a avaliar se você está em
            um peso saudável para a sua altura. Ele dá uma ideia se você está
            abaixo do peso (magrinho demais), no peso ideal, um pouco acima do
            peso ou se está passando dos limites (um abraço pra obesidade).
          </p>
          <p>
            Claro, cada pessoa é única, então nem sempre o IMC conta a história
            toda, mas é um bom ponto de partida para ficar de olho na sua saúde
            e conte comigo para
          </p>
        </div>
        <div className="imcCalculator">
          <div className="input-container">
            <label>
              Peso (kg):
              <input
                type="number"
                placeholder="Ex: 75"
                value={weight}
                onChange={(e) => {
                  setWeight(e.target.value);
                }}
              />
            </label>
            <label>
              Altura (cm):
              <input
                type="number"
                value={height}
                placeholder="Ex: 180"
                onChange={(e) => {
                  setHeight(e.target.value);
                }}
              />
            </label>
            <button onClick={calculateIMC}>Calcular</button>
          </div>
          {message && (
            <div className="hiddenContact">
              <p className="message">{message}</p>
              <button
                className="contactHideButton"
                onClick={() => handleOpenWhatsapp(whatsappNumber)}
              >
                Entre em contato
              </button>
            </div>
          )}
        </div>
      </section>
      <img src={newWave} alt="background wave" className="wave" />
    </div>
  );
}
