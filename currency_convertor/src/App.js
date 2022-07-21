import { useState } from 'react';
import './App.css';

function App() {
  const[msg , setMsg] =useState('')

  const fetchRes = () => {
    let data = document.getElementById('inp').value;
    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;
    let res = data;

    if(to==='INR'){
    
      if(from==='USD')  res = (Number(data)*73.70426).toFixed(2);
    }
    if(to==='USD'){
      
      if(from==='INR') res = (Number(data)/73.70426).toFixed(2);
      console.log(res);
    }

    let str = `${data} ${from} = ${res} ${to}`;
    setMsg(str)
  }

  return (
    <div className="App">
        <table>
          <thead>
            <tr>
              <th colSpan={3}>Currency Convertor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={3}>Enter Amount</td>
            </tr>
            <tr>
              <td colSpan={3}><input type="number" id='inp'></input></td>
            </tr>
            <tr>
              <td>From</td>
              <td></td>
              <td>To  </td>
            </tr>
            <tr>
              <td>
                <select id='from'>
                  <option value="USD">🇺🇸  USD </option>
                  <option value="INR">🇮🇳 INR </option>
                </select>
              </td>
              <td><i class="fa-solid fa-arrow-right-arrow-left"></i></td>
              <td>
              <select id='to'>
                  <option value="INR">🇮🇳 INR </option>
                  <option value="USD">🇺🇸 USD </option>
                </select>
              </td>
            </tr>
            <tr>
              <td colSpan={3} id='res'>{msg}</td>
            </tr>
            <tr>
              <td colSpan={3} id='res'><button onClick={fetchRes}>Get Exchange Rate</button></td>
            </tr>
          </tbody>
        </table>
    </div>
  );
}

export default App;
