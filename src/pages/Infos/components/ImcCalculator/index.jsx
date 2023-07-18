import React, { useState } from "react";
import "./styles.css";

export default function Imc() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [message, setMessage] = useState("");

  const calculateBMI = () => {
    if (weight && height) {
      const bmi = weight / (height / 100) ** 2;
      let bmiMessage = "";

      if (bmi < 18.5) {
        bmiMessage =
          "Abaixo do Peso - Ei, você é tão leve que poderia competir no levantamento de penas! Mas cuidado, vamos ajudar você a ganhar peso de forma saudável. Que tal um plano alimentar com direito a sobremesa e tudo?";
      } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiMessage =
          "Peso normal - Parabéns! Você está no seu peso ideal, meu amigo! Mas se quiser continuar assim, vou ser seu 'guardião da balança' e te ajudar a manter essa forma física invejável. Aceita uma receita de bolo de cenoura saudável?";
      } else if (bmi >= 25 && bmi < 29.9) {
        bmiMessage =
          "Sobrepeso - Ei, olha só, você não está acima do peso, está apenas 'acumulando amor'! Vamos trabalhar juntos para encontrar um equilíbrio saudável e garantir que você possa saborear as delícias da vida sem preocupações!";
      } else if (bmi >= 30 && bmi < 34.9) {
        bmiMessage =
          "Obesidade Grau 1 - Seu IMC diz que você é oficialmente um 'rebelde das balanças'! Mas não se preocupe, estou aqui para te ajudar a desbravar esse caminho e voltar para o território do peso saudável. Vamos suar a camisa (literalmente) juntos!";
      } else if (bmi >= 35 && bmi < 39.9) {
        bmiMessage =
          "Obesidade Grau 2 - Ei, você é uma pessoa incrível, e agora temos um novo desafio: transformar a obesidade grau 2 em 'Grau de Determinação'! Estou aqui para oferecer apoio, compartilhar dicas e ajudá-lo a dar passos importantes rumo a uma vida mais saudável.";
      } else {
        bmiMessage =
          "Obesidade Grau 3 - Você é uma estrela brilhante, e vamos trazer todo esse brilho para a jornada de saúde! Juntos, vamos enfrentar a obesidade grau 3, conquistar pequenas vitórias e trabalhar para transformar o impossível em possível. Conte comigo para apoio e motivação!";
      }

      setMessage(`Seu IMC é ${bmi.toFixed(2)} (${bmiMessage})`);
    }
  };

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
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </label>
            <label>
              Altura (cm):
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </label>
            <button onClick={calculateBMI}>Calcular</button>
          </div>
          {message && <p className="message">{message}</p>}
        </div>
      </section>
    </div>
  );
}
