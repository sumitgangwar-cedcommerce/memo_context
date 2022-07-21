import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

var converter = require('number-to-words');

function App() {

  const [word , setword] = useState('')

  // const ones = [' zero ',' one ', ' two ', ' three ' , ' four ' , ' five ' , ' six ' , ' seven ' , ' eight ' , ' nine ']
  // const twos = [' ten ',' eleven ' , ' twelve ' , ' thirteen ' , ' fourteen ' , ' fifteen ' , ' sixteen ' ,' seventeen ' ,' eightteen ' , ' nineteen ' ]
  // const tens = [' zero ',' ten ',' twenty ' , ' thirty ' , ' fourty ' , ' fifty ' , ' sixty ' , ' seventy ' , ' eighty ' , ' ninety ']

  const changeHandler = (e) => {
    let num = Number(e.target.value);
    // if(num<10)  setword(findOnes(num))
    // else if(num<20)  setword(findTwos(num))
    // else if(num<100) setword(findTwos(num))
    // else if(num<1000){
    //   let str = '';
    //   let s_num = num.toString()
    //   str+=findOnes(s_num[0]) + ' Hundred ' + findTens(s_num[1]+s_num[2])
    //   setword(str)
    // }  
    setword(converter.toWords(num));
  }

  // const findOnes = (data) => {
  //   data  = Number(data)
  //   return ones[Number(data)]
  // }
  // const findTwos = (data) =>{
  //   data = Number(data)
  //   if(Number(data)<10) return findOnes(data) 
  //   return twos[data-10]
  // }
  // const findTens = (data) =>{
  //   console.log(Number(data[0]))
  //   data = Number(data)
  //   if(data<20) return findTwos(data)
  //   data = data.toString()
  //   if(data[1]==='0') return tens[Number(data[0])]
  //   else return tens[Number(data[0])] + findOnes(data)
    
  // }

  return (
    <div className="App">
      <p>Please Enter Number</p>
      <p><input onChange={changeHandler} type="number"></input> </p>
      <p>{word}</p>
    </div>
  );
}

export default App;
