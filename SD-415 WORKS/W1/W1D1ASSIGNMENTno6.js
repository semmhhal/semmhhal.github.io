import promptsync from "prompt-sync"
const prompt = promptsync()

let num1;
let str=0
num1=prompt("enter a number?")
for(let i=0;num1.length>i;i++){
  str+=parseInt(num1[i])
  
}console.log(str)