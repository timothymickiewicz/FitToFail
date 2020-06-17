import React from 'react';
import Info from './Info';
import Form from './Form';
import logo from './logo.png';
import './App.css';
import Toast from './Toast';

function App() {
  console.log(Toast);
  // let squats = new Info("Squats", 100);
  let form = new Form();
  let toast = new Toast("squats", 100);
  console.log(toast.render());
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {toast.render()}
        {/* Rendering inputs */}
        {form.render()}
      </header>
    </div>
  );
}

export default App;
