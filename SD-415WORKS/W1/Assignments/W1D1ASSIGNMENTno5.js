import promptsync from "prompt-sync"
const prompt = promptsync()
let CostofHouse=0;
CostofHouse=prompt("Enter cost of house?")
let DownPayment=0;
let interest1=0.1;
let interest2=0.15;

if(CostofHouse>=200000){
    DownPayment=5000+ interest1*(CostofHouse-200000)
    console.log(DownPayment)}
else if(CostofHouse>100000 && CostofHouse<200000){
    DownPayment=2000+interest2*(CostofHouse-100000)
    console.log(DownPayment)
}
else if(CostofHouse>100000 && CostofHouse<50000){
    DownPayment=1000+interest1*(CostofHouse-50000)
    console.log(DownPayment)
}
else{
    DownPayment=0.05*CostofHouse
    console.log(DownPayment)
}
