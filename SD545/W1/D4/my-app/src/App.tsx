import React, { ChangeEvent, FormEvent, MouseEvent, useState } from 'react';
import App1 from './App-input';

interface Person{
  username:string;
  password:string;
  age:number
}
function App() {
// const [person, SetPerson]=useState({username:'', password:'', age:0})

// const {username,password,age}=person

// const handleformchange=(e:ChangeEvent<HTMLInputElement>)=>{
//   SetPerson({...person,[e.target.name]:e.target.value})

const handleClickonDiv=(e:MouseEvent<HTMLDivElement>)=>{
  console.log(e.target)
  console.log(e.currentTarget)
}

return(
  <div onClick={handleClickonDiv}>
    <div>Hello</div>
    <button>Click me</button>
    <div>World</div>
{/* <form>
  username:<input name="username" value={username} onChange={handleformchange}/>
  password:<input name="password" value={password} onChange={handleformchange}/>
  age:<input name="age" value={age} onChange={handleformchange}/>
  <button onClick={login}>Login</button>
</form> */}

<App1/>
  </div>

 )
}

export default App;
