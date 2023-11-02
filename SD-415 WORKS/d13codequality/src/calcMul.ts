export function calcMul(num1:number,num2:number,num3:number){
let mul1:number=1
    while(num1>= 1){
       mul1 = mul1 * (num1 % 10)
        num1 = Math.floor(num1 / 10)
}
return mul1
}
