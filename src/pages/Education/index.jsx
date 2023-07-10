import React from "react";
import wave1 from "../../assets/waves/home/colorwave-bg.png";
import "./style.css";

export default function Education() {
  return (
    <div className="containerHome">
      <img src={wave1} alt="background wave" className="wave1" />
      {/* <img src={wave3} alt="background wave" className="wave2" /> */}
    </div>
  );
}
