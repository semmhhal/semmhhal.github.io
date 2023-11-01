// import{ computerSalesCommission } from "./compound.js"
// console.log("compound returns 0: ",computerSalesCommission(100))
// import promptsync from "prompt-sync";
// const prompt = promptsync();

// function add(a: number, b: number): number {
//     return a + b;
//    }
//    const sum1: number = add(10,15);
//    const sum2: number = add(9, 5 ) ;
//    console.log("sum1 is: ", sum1, " sum2 is: ", sum2);

   //first question 


//import PromptSync=require("prompt-sync")

//    let commission:number=230000;
//    let salaryType:string="Y";
   
//    function computeSalesCommission(commission: number, salaryType: string): string {
//      let result: number = 0;
   
//      if (salaryType.toUpperCase() === "Y") {
//        if (commission < 300) {
//          return "No commission";
//        } else if (commission < 500) {
//          result = 0.01 * commission;
//          return "Your commission as a salaried individual is: " + result;
//        } else {
//          result = (0.02 * (commission-500))+(0.1*500);
//          return "Your commission as a salaried individual is: " + result;
//        }
//      } else {
//        if (commission < 300) {
//          return "No commission";
//        } else if (commission < 500) {
//          result = 0.02 * commission;
//          return "Your commission as a non-salaried person is: " + result;
//        } else {
//          result = (0.03 * (commission-500))+(0.1*500);
//          return "Your commission as a non-salaried person is: " + result;
//        }
//      }
//    }
   
//    console.log(computeSalesCommission(commission, salaryType));

   // second question 

   let years:number=23
  let  annInterest:number=22
   let InitialAMT:number=23000

   function Compound(years:number,annInterest:number,InitalAMT:number){
   
   let balance:number=InitialAMT
   
   let monthlyrate:number=(annInterest/100)/12;
    let CompYears:number=years*12
   
   for(let i=0;i<CompYears;i++){
       let interest:number=balance*monthlyrate
       InitialAMT=balance+interest
       
   }
   return InitialAMT
}
console.log(Compound(years,annInterest,InitialAMT))

//third question

let CostofHouse:number=1200000;
let DPayment:number=0;
let interest1:number=0.1;
let interest2:number=0.15;

function DownPayment(CostofHouse:number,DPayment:number,interest1:number,interest2:number){
if(CostofHouse>=200000){
    DPayment=5000+ interest1*(CostofHouse-200000)
    return DPayment}
else if(CostofHouse>100000 && CostofHouse<200000){
    DPayment=2000+interest2*(CostofHouse-100000)
    return DPayment
}
else if(CostofHouse>100000 && CostofHouse<50000){
    DPayment=1000+interest1*(CostofHouse-50000)
    return DPayment}

else{
    DPayment=0.05*CostofHouse
    return DPayment
}

}
console.log(DownPayment(CostofHouse,DPayment,interest1,interest2))