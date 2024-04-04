import React, { ChangeEvent, useState } from 'react';
import App1 from './App-input';

function App() {
  const [username,setUsername]= useState('')
  const changeUsername= (e:ChangeEvent<HTMLInputElement>)=>{
    setUsername(e.currentTarget.value)
  }
  return (
<div>
  {/* <input value={username} onChange={changeUsername}/> */}
  <App1/>
</div>

  );
}

export default App;
