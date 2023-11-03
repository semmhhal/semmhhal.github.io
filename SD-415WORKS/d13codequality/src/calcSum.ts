export function calcSum(num1:number){
    let sum1:number=0;
    while(num1>= 1){
       // console.log(sum1=sum1+num1%10)
       sum1 = sum1 + (num1 % 10)
       num1 = Math.floor(num1 / 10)
    }
   return sum1

}

