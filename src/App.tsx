import React from 'react';
import Lottie from 'react-lottie'
import animationData from './assets/Lottie/66205-coding.json'
import './App.css';

function App() {

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="App">
      <div className="main">
      <Lottie 
        options={defaultOptions}
        height={500}
        width={500}
        />
        <h2>Sorry, we are under maintenance!</h2>
        <p>if you need contact me on <a href="mailto:wesley.praca@outlook.com.br" className="link">wesley.praca@outlook.com.br</a></p>
        </div>
    </div>
  );
}

export default App;
