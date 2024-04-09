import React,{ChangeEvent,MouseEvent,useState} from "react";

function DemoApp(){
    const [state,setState]= useState<number | string>('')
    const changeHandler= (e:ChangeEvent<HTMLInputElement>)=>{setState(e.currentTarget.value)}

    const letsAdd=()=>{
        const newnum=Number(state)+10
        setState(newnum)
    }
    return (
        <div>
        <input type="number" value={state} onChange={changeHandler}/>
        <button onClick={letsAdd}>Add 10 upon clicking</button>
        </div>
    )
}
export default DemoApp