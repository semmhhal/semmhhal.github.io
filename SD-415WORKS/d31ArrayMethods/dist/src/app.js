// /* 
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
// The function should not modify the array. It should return the new array.
// */
// let arr = [5, 3, 8, 1];
// function filterRange(arr: number[], a: number, b: number,): number[] {
//     let newArr: number[] = []
//     newArr = arr.slice()
//     let result = newArr.filter((number) => number >= a && number <= b)
//     return result
// }
// console.log(filterRange(arr, 1, 4))
export {};
// /*
// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
// The function should only modify the array. It should not return anything.
// */
// function filterRangeInPlace(arr: number[], a: number, b: number): number[] | undefined {
//     arr.filter((number) => number >= a && number <= b)
//     return arr
// }
// console.log(filterRangeInPlace(arr, 1, 4))
// type Calculator = {
//     methods: { [key: string]: (a: number, b: number) => number };
//     calculate: (str: string) => number;
//     addMethod: (name: string, func: (a: number, b: number) => number) => void;
// }
// export const calculator: Calculator = {
//     methods: {
//         "-": (a, b) => a - b,
//         "+": (a, b) => a + b,
//     },
//     calculate: function (str: string): number {
//         let arrOFcal = str.split(' ')
//         let [a, Op, b] = arrOFcal
//         let A = parseInt(a)
//         let B = parseInt(b)
//         return this.methods[Op](A, B)
//     },
//     addMethod: function (name: string, fun: (a: number, b: number) => number): void {
//         this.methods[name] = fun;
//     }
// }
// // export function unique(arr: string[]): string[] {
// //     return [];
// // }
// // export type User ={
// //     id: string;
// //     name: string;
// //     age: number;
// // }
// // export function groupById(users: User[]): { [key: string]: User } {
// //     // declare usersById to be an object with string keys and User values
// //     const usersById: { [key: string]: User } = {};  
// //     // FURTHER IMPLEMENTATION REQUIRED HERE
// //     return usersById;
// // }
// // type SurnameUser = {
// //     name: string;
// //     surname: string;
// //     id: number;
// // }
// // type FullNameUser = {
// //     fullName: string;
// //     id: number;
// // }   
// // export function map2fullName(users: SurnameUser[]): FullNameUser[] {
// //     let result: { fullName: string, id: number }[] = [];
// //     // FURTHER IMPLEMENTATION REQUIRED HERE
// //     return result;
// // }
// // export function sortByAge(users: User[]  ): void {
// //     // FURTHER IMPLEMENTATION REQUIRED HERE
// //   }
// // export function findOldest(users: User[]): User {
// //     let oldest = users[0];
// //     // FURTHER IMPLEMENTATION REQUIRED HERE
// //     return oldest;
// // }
// // /* getAverageAge using reduce */
// // export function getAverageAge(users: User[]): number {
// //     return 0;
// // }
