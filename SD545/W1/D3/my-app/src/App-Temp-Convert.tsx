import React, { ChangeEvent, useState } from "react";


function Convert(){
    const [celsius,setCelsius]=useState<number | string>('')


    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{setCelsius(e.currentTarget.value)}

    const letsConvert=()=>{
        const fahrenheit= (9/5) * Number(celsius) + 32
        setCelsius(fahrenheit)
    }

    return(
        <div>
            <input type="number" value={celsius} onChange= {handleChange}/>
            <button onClick={letsConvert}>Convert</button>
        </div>
    )

}

export default Convert