import React from 'react';
import wave1 from '../../assets/waves/home/wave1.svg';
import wave2 from '../../assets/waves/home/wave2.svg';
import wave3 from '../../assets/waves/home/wave3.svg';
import './style.css';

export default function Home() {
  return (
    <div className='container'>
      <div className="wave">
        <img src={wave1} alt="background wave" className='wave1'/>
        <img src={wave2} alt="background wave" className='wave2'/>
        <img src={wave3} alt="background wave" className='wave3'/>
      </div>
    </div>
  )
}
