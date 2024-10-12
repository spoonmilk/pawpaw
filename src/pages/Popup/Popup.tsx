import React from 'react';
import logo from '../../assets/img/logo.svg';
import harold from '../../assets/img/harold.jpg';
import Greetings from 'containers/Greetings/Greetings';
import RoundedRedButton from '../../containers/Components/RoundedRedButton';
import './Popup.css';

const Popup = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={harold} className="App-logo" alt="logo" /> 
        <p>
          This is some sketchy shit man!
        </p> 
        <div className="flex justify-center bg-gray-900">
          <RoundedRedButton onClick={() => void(0)}>Tell me, great oracle, if my data is secure!</RoundedRedButton>
        </div>
      </header> 
    </div>
  );
};

export default Popup;
