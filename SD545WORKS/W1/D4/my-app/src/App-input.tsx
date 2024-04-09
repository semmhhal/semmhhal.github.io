import React, { ChangeEvent, useState,MouseEvent, FormEvent, useRef } from 'react';


function App1() {
const [person,setPerson]=useState({username:'',password:''})

const usernameRef= useRef<HTMLInputElement | null>(null)
const passwordRef= useRef<HTMLInputElement | null>(null)

const {username, password}= person

const handlelogin=(e:MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault()
    const username= usernameRef.current!.value
    const password= passwordRef.current!.value
    setPerson({...person,username,password})

    if(username==="semhal" && password==="123"){
        console.log('success')
    }
    else{
        console.log('failed')
    }
}

  return (
<div>
 Hello, {username}{password}
    <form >
  username:<input ref={usernameRef}/>
  password:<input ref={passwordRef}/>
  <button onClick={handlelogin}>login</button>
  </form>
</div>
  );
}

export default App1;
