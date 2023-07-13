import React from "react";
import wave3 from "../../assets/waves/home/waveInverted3.svg";
import newWave from "../../assets/waves/home/newWave3.png";
import wave2 from "../../assets/waves/home/waveInverted2.svg";
import wave1 from "../../assets/waves/home/waveInverted1.svg";
import stetic from "../../assets/photos/stetic.png";
import dna from "../../assets/photos/dnaFood.jpg";
import clinic from "../../assets/photos/mockup6.jpg";
import fitxfat from "../../assets/photos/gorduraxmusculo.jpg";
import "./style.css";

export default function Contact() {
  return (
    <div id="contact" className="containerFocused">
      <div className="headerEducation">
        <img src={wave2} alt="background wave" className="waveInv3" />
        <img src={wave3} alt="background wave" className="waveInv2" />
        <img src={wave1} alt="background wave" className="waveInv1" />
      </div>
      <div id="specialities" className="boxEspecialities"></div>

      <img src={newWave} alt="background wave" className="newWaveFooter" />
    </div>
  );
}
