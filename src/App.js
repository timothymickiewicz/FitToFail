import React from 'react';
import Info from './info'
import logo from './logo.svg';
import './App.css';

function App() {
  console.log(Info);
  let squats = new Info("Squats", 100);
  console.log(squats.present());
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {squats.present().value}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
