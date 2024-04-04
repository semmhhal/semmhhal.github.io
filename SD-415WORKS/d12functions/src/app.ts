// // import{ computerSalesCommission } from "./compound.js"
// // console.log("compound returns 0: ",computerSalesCommission(100))
// // import promptsync from "prompt-sync";
// // const prompt = promptsync();

        //1.
   let commission:number=230000;
   let salaryType:string="Y";
   
   function computeSalesCommission(commission: number, salaryType: string): string {
     let result: number = 0;
   
     if (salaryType.toUpperCase() === "Y") {
       if (commission < 300) {
         return "No commission";
       } else if (commission < 500) {
         result = 0.01 * commission;
         return "Your commission as a salaried individual is: " + result;
       } else {
         result = (0.02 * (commission-500))+(0.1*500);
         return "Your commission as a salaried individual is: " + result;
       }
     } else {
       if (commission < 300) {
         return "No commission";
       } else if (commission < 500) {
         result = 0.02 * commission;
         return "Your commission as a non-salaried person is: " + result;
       } else {
         result = (0.03 * (commission-500))+(0.1*500);
         return "Your commission as a non-salaried person is: " + result;
       }
     }
   }
   
   console.log(computeSalesCommission(commission, salaryType));

//    // 2. 

   let years:number=23
  let  annInterest:number=22
   let InitialAMT:number=23000

   function Compound(years:number,annInterest:number,InitalAMT:number){
   
   
   let monthlyrate:number=(annInterest/100)/12;
    let CompYears:number=years*12
   
   for(let i=0;i<CompYears;i++){
    let balance:number=InitialAMT
     let interest:number=balance*monthlyrate
    InitialAMT=balance+interest
       
   }
   return InitialAMT
}
console.log(Compound(years,annInterest,InitialAMT))

//3.

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

//
// 4. Write functions sumDigits and multDigits that take an integer parameter and return the sum or
// product of the digits in the number. Use the / and % operators to find the digits.

let num1:number=1234
let num2:number=102
let num3:number=8
let sum1:number=0
let mul1:number=1
function isSum(num1:number,num2:number,num3:number){
    while(num1>= 1){
       // console.log(sum1=sum1+num1%10)
       sum1 = sum1 + (num1 % 10)
       num1 = Math.floor(num1 / 10)
    }
   return console.log(sum1)

}
isSum(num1,num2,num3)
function isMul(num1:number,num2:number,num3:number){
    while(num1>= 1){
       mul1 = mul1 * (num1 % 10)
        num1 = Math.floor(num1 / 10)
}
return console.log(mul1)
}
isMul(num1,num2,num3)

//5. Write a function, convertFahrenheit, that takes an input parameter with a temperature in Fahrenheit
// and returns the temperature in Celsius.

let FahrTemp:number=32
let celsTemp:number=0
function ConvertTemp(FahrTemp:number){
    celsTemp= ((FahrTemp-32)*5)/9
    return celsTemp
}
console.log(ConvertTemp(FahrTemp))

//6.Write a function that takes x and y co-ordinates of two points as inputs and returns the distance
// between these two points based on the formula, d = √( x 2 − x 1 ) 2 + ( y 2 − y 1 ) 2

let x1:number=23
let y1:number=29

let x2:number=43
let y2:number=90
let d:number=0;
let c:number=0;
function Coordinates(x1:number,y1:number,x2:number,y2:number){
d=((x2-x1)*(x2-x1)) + ((y2-y1) * (y2-y1))
return c=Math.sqrt(d)
}
console.log(Coordinates(x1,y1,x2,y2))