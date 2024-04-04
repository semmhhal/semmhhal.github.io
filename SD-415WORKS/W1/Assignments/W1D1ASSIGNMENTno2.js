
import promptsync from "prompt-sync"
const prompt = promptsync()

let age;
age=prompt("enter your age? ")
while(age!=18 && age<18 ){
    age=prompt("enter your age? ")
}
console.log("Eligbile to drink!")

do{age=prompt("enter your age: ")
}
while(age!=18 && age<18 )
console.log("Eligbile to drink!")