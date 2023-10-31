import promptsync from "prompt-sync"
const prompt = promptsync()
let years
let annInterest
let InitialAMT
years=prompt("Enter number of compounding years?")
annInterest=prompt("Enter Annual Interest rate?")
InitialAMT=prompt("Enter InitialAMT?")

let balance=InitialAMT

let monthlyrate=(annInterest/100)/12;

let CompYears=years*12

for(let i=0;i<CompYears;i++){
    let interest=balance*monthlyrate
    InitialAMT=balance+interest
    
}
alert(InitialAMT)