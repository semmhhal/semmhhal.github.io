
// function factorial(5: number): number {

//         if(5===1){
//        return 1}
//         else{
//        return 5 * factorial(5-1)}
//     }

// function factorial(4: number): number {

//         if(4===1){
//        return 1}
//         else{
//        return 4 * factorial(4-1)}
//     }

// function factorial(3: number): number {

//         if(3===1){
//        return 1}
//         else{
//        return 3 * factorial(3-1)}
//     }

// function factorial(2: number): number {

//         if(2===1){
//        return 1}
//         else{
//        return 2 * factorial(2-1)}
//     }

// function factorial(1: number): number {

//         if(1===1){
//        return 1}
//         else{
//        return n * factorial(n-1)}
//     }
// console.log(factorial(5))



// function sum(num:number):number{
//     let total =0
// if(num===1){
//     return 1
// }
// else{
//     return total+sum(num-1)
// }
// }
// console.log(sum(4))

// function fibonacci(num:number):number{
//     if(num<=1)
//     return num
//     else {
//     return fibonacci(num-1) + fibonacci(num-2)}
// }
// console.log(fibonacci(30))

interface List{
    value: number;
    next: List | null;
}

let list:List = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
function reverseList(list:List|null):any{
while(list!=null){
    list=list.next
    console.log(list.value)
}
    }
    console.log(reverseList(list))
// function outputList(list:List):any{
//     if(list.next===null){
//     console.log(list.value);
//     return 'done';
//     }
//     else{
//         console.log(list.value);
//        return outputList(list.next)
//     }
// }

// console.log(outputList(list))

// function reverseList(list:List):any{
//     if(list.next===null){
//     console.log(list.value);
//     return 'done';
//     }
//     else{
//        let c =  outputList(list.next);
//         console.log(list.value);
//        return c
//     }
// }

// console.log(outputList(list))
// function outputListLoop(list:List|null):void{
//   while(list!==null){
//     console.log(list.value)
//     list=list.next

//   }
// }
// outputListLoop(list)
