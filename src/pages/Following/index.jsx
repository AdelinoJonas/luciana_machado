import React from "react";
import wave1 from "../../assets/waves/home/colorwave-bg.png";
import wave3 from "../../assets/waves/home/newWave3.png";
import "./style.css";

export default function Following() {
  return (
    <div id="following" className="containerHome">
      <img src={wave1} alt="background wave" className="wave1" />
      <img src={wave3} alt="background wave" className="wave2" />
    </div>
  );
}
