import React from "react";
import wave3 from "../../assets/waves/home/waveInverted3.svg";
import wave2 from "../../assets/infos/waveInvert.svg";
import orange from "../../assets/infos/waveOrange.svg";
import wave1 from "../../assets/waves/home/waveInverted1.svg";
import Map from "../../components/Map";
import "./style.css";

export default function Contact() {
  const latitude = -25.473970339736564;
  const longitude = -49.29365043791201;
  return (
    <div id="contact" className="containerContact">
      <div className="headerContact">
        <img src={wave2} alt="background wave" className="waveContact2" />
        <img src={wave1} alt="background wave" className="waveContact1" />
      </div>

      <div className="boxContactleft">
        <div className="boxContactRight">
          <h3>Contato:</h3>

          <span>
            Av. Rep. Argentina, 2275 - Água Verde, Curitiba - PR, 80610-260
          </span>

          <div className="location">
            <Map latitude={latitude} longitude={longitude} />
          </div>
        </div>
      </div>

      <img src={orange} alt="background wave" className="newWaveContact" />
    </div>
  );
}
