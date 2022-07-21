import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

var converter = require('number-to-words');

function App() {

  const [word , setword] = useState('')


  const changeHandler = (e) => {
    let num = Number(e.target.value);
    setword(converter.toWords(num));
  }

 
  return (
    <div className="App">
      <p>Please Enter Number</p>
      <p><input onChange={changeHandler} type="number"></input> </p>
      <p>{word}</p>
    </div>
  );
}

export default App;
