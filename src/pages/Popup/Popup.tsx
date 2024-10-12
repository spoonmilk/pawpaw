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
        <div className="flex items-center gap-4">
          {/* <img src={harold} alt="" className="size-5 rounded-lg object-cover"/> */}
          <div>
            <h3 className="text-lg/tight font-medium text-gray-900">PawPaw detects something suspicious!</h3>
            <p className="text-sm/tight text-gray-500">PawPaw is a Chrome extension that detects suspicious behavior on the web.</p>
          </div>
        </div>
      </header> 
    </div>
  );
};

export default Popup;
