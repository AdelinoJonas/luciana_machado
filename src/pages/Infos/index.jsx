import React from "react";
import wave3 from "../../assets/waves/home/waveGreenInverted.svg";
import wave2 from "../../assets/waves/home/waveInvertedTransparent.svg";
import "./style.css";

export default function Infos() {
  return (
    <div id="infos" className="containerInfos">
        <div className="headerEducation">
          <img src={wave2} alt="background wave" className="greenInv1" />
          <img src={wave3} alt="background wave" className="greenInv3" />
        </div>

        
    </div>
  );
}
