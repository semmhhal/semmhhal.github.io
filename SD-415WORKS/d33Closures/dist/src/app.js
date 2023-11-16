// //write any code you want to test here and run with npm run app
// // import {makeArmy } from './closures.js';
export {};
// // const army = makeArmy();
// //  army[0](); // the shooter number 0 shows 10
// //   army[5](); // and number 5 also outputs 10...
// const arr = [1, 2, 3, 4, 5, 6, 7];
// const arr2 = [0, 5, 10, 6, 100];
// const arr3 = [0, 4, 5, 10, 6, 100];
// function inArray(arr:number[]):(value:number)=>boolean{
//  return function(value:number):boolean{
//    let newArr=arr.filter((arrvalue)=>value===arrvalue)
//     return newArr.length>0
//    }
// }
// const filter1to7=inArray(arr)
// const filteredArr2=arr2.filter(filter1to7)
// console.log(filter1to7(100))
// console.log(filteredArr2)
// ///
// function inBetween(start: number, end: number):(value:number)=> boolean {
//     return function(num: number): boolean {
//       return num >= start && num <= end;
//     };
//   }
//    const filter3to6=inBetween(3,6)
//    const filteredArr=arr3.filter(filter3to6)
//    console.log(filter3to6(5))
//    console.log(filteredArr)
//    /////
//    function makeArmy():any {
//     let army: (() => number)[] = [];
//     for (let i = 0; i < 10; i++) {
//       army[i] = function () {
//         return i;
//       };
//     }
//     return army;
//   }
//   //
