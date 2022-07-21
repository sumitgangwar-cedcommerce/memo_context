import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import { useState } from 'react';

function App() {

  const[word , setWord] = useState(0);
  const [character , setCharacter] = useState(0);

  const btnHandler = (e) => {
    let inp =  document.getElementById('inp').value;
    if(e.target.value === 'u')  document.getElementById('inp').value =inp.toUpperCase();
    else document.getElementById('inp').value =inp.toLowerCase();
  }

  const inpHandler = (e) =>{
    let inp = document.getElementById('inp').value;
    let count = 0;
    for(let i = 0; i < inp.length; i++) if(inp[i]!==' ')  count++;
    setWord(inp.trim().split(' ').length)
    setCharacter(count)
  }

  return (
    <div className="App">
      <h1>Text Area</h1>
      <p>
        <textarea id='inp' onChange={inpHandler}></textarea>
      </p>
      <p>
        <button onClick={btnHandler} value='u'>Upper Case</button>
        <button onClick={btnHandler} value='l'>Lower Case</button>
      </p>
      <p>
        <h1>Summary</h1>
        <p>{word} words and {character} characters </p>
      </p>
    </div>
  );
}

export default App;
