import logo from './logo.svg';
import './App.css';
import { createContext } from 'react';
import ComponentA from './ComponentA';

export const Name = createContext('')



function App() {
  const name = "Sumit Gangwar"
  return (
    <>
      <Name.Provider value={name}>
        <ComponentA />
      </Name.Provider>
    </>
  );
}

export default App ;
