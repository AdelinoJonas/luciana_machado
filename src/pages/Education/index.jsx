import React from "react";
import wave3 from "../../assets/waves/home/waveInverted3.svg";
import wave2 from "../../assets/waves/home/waveInverted2.svg";
import wave1 from "../../assets/waves/home/waveInverted1.svg";
import "./style.css";

export default function Education() {
  return (
    <div className="containerEducation">
      <div className="headerEducation">
        <img src={wave2} alt="background wave" className="waveInverted1" />
        <img src={wave3} alt="background wave" className="waveInverted2" />
        <img src={wave1} alt="background wave" className="waveInverted2" />
      </div>
      
    </div>
  );
}
