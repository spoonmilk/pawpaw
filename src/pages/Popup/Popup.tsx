import React from 'react';
import logo from '../../assets/img/logo.svg';
import harold from '../../assets/img/harold.jpg';
import Greetings from 'containers/Greetings/Greetings';
import RoundedRedButton from '../../containers/Components/Button';
import './Popup.css';

const Popup = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={harold} className="App-logo" alt="logo" /> 
        <p>
          This is some sketchy shit man!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          WOW! React is working!
        </a>
      </header>
      <div className="flex justify-center">
        <RoundedRedButton onClick={() => void(0)}>I got a button guys!</RoundedRedButton>
      </div>
    </div>
  );
};

export default Popup;
