import React, { ChangeEvent, useState,MouseEvent } from 'react';


function App1() {
//   const [username,setUsername]= useState('')
//   const[password,setPassword]= useState('')
    const [person,setPerson]=useState({username:'', password:''})
    const {username,password}=person


  const changeUsername= (e:ChangeEvent<HTMLInputElement>)=>{
    setPerson({...person, password:e.currentTarget.value})}


    const changepassword= (e:ChangeEvent<HTMLInputElement>)=>{
       setPerson({...person,username:e.target.value})}


    const logIn=(e:MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault()
        if(username==='John' && password==='123'){
        console.log('success')
        }
        else{
            console.log('fail')
        }

    }

  
  return (
<div>
    <form>
  Username: <input value={username} onChange={changeUsername}/>
  Password: <input value={password} onChange={changepassword}/>
  <button onClick={logIn}>LogIn</button>
  </form>
</div>
  );
}

export default App1;
