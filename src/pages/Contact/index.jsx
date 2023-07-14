import React from "react";
import wave3 from "../../assets/waves/home/waveInverted3.svg";
import wave2 from "../../assets/infos/waveInvert.svg";
import orange from "../../assets/infos/waveOrange.svg";
import wave1 from "../../assets/waves/home/waveInverted1.svg";
import "./style.css";

export default function Contact() {
  return (
    <div id="contact" className="containerContact">
      <div className="headerContact">
        <img src={wave2} alt="background wave" className="waveContact2" />
        {/* <img src={wave3} alt="background wave" className="waveContact3" /> */}
        <img src={wave1} alt="background wave" className="waveContact1" />
      </div>
      <div id="specialities" className="boxEspecialities"></div>

      <img src={orange} alt="background wave" className="newWaveContact" />
    </div>
  );
}
