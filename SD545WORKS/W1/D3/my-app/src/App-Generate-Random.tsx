import React, { ChangeEvent, useState } from "react";



function RandomGenerate(){
    const [num, setNum]= useState<number | string>('')

    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{setNum(e.currentTarget.value)}

    const letsGenerate=(min:number,max:number)=>{
       const randomnum= Math.floor(Math.random()*(max-min+1) + min)
       setNum(randomnum)
    }

    return(
        <div>
             <input type="number" value={num} onChange= {handleChange}/>
            <button onClick={()=>letsGenerate(1,100)}>Generate Random Number</button>
        </div>
    )

}

export default RandomGenerate