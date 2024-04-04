import {useState } from 'react';

import './App.css';
import Convert from './App-Temp-Convert';
import RandomGenerate from './App-Generate-Random';

function App() {
const [count,setCount]=useState(10)

  const increaseAmt=()=>{
    setCount(count+1)
    console.log(count)

}
const decreaseAmt=()=>{
  setCount(count-1)
  console.log(count)

}
 
  return (
    <div>
      {count} 
      <br></br>
    <button onClick={increaseAmt}>Increase Me</button>
    <button onClick={decreaseAmt}>Decrease Me</button>
    <RandomGenerate/>
    <Convert/>
  
    </div>

  );

}

export default App;


