// type Person = {
//     name: string;
//     age: number;
//     job: string;
//     sayHi(this: Person): void;
//     }
//    const manager: Person = {
//     name: "John",
//     age: 27,
//     job: "Software Engineer",
//     sayHi: sayHowdy
//     };
//     const intern: Person= {
//     name: "Ben",
//     age: 21,
//     job: "Software Engineer Intern",
//     sayHi: sayHowdy
//     };
export {};
//    function sayHowdy(this: Person) {
//    console.log("Hello, my name is ", this.name, ". My age is ", this.age, ". My job is", this.job);
//  }
//     manager.sayHi(); // Hello, my name is John. I am 27. My job is Software Engineer.'
//  intern.sayHi(); // Hello, my name is Ben. I am 21. My job is Software Engineer Intern.
// ////////
//  let x = 5;
// let y = {x};
// console.log(y); //{x : 5}
// function sum(arr: number[]): number[] { return arr }
// const foo = {sum,x };
// console.log(foo)
// console.log(foo.sum)
// console.log(foo.sum([1,2,3]))
// ////////////write a for loop to print out the values of the properties according to the property names in the
// // propertyOrder array. You must use the properties array to access the values. You cannot directly
// // write console.log(numbers.one) …
// const numbers: { [key: string]: number } = {
//     one: 1,
//     two: 22,
//     three: 333,
//     four: 444,}
//    const propertyOrder = ["one", "four", "three", "two" ];
//    for(const property of propertyOrder){
//    console.log(numbers[property])
//    }
//    let key:Object=Object.keys(numbers);
//    console.log(key)
// //objectliteral
// const book1={
//   title:"book one",
//   author:"John Doe",
//   year:"2013",
//   getsummary:function(){
//       return `${this.title} was written by ${this.author} in ${this.year}`
//   }
// };
// console.log(book1.getsummary())
// console.log(Object.values(book1))
// console.log(Object.keys(book1))
// //ObjectConstructor
// function Book(title:string,author:string,year:number){
//   this.title=title;
//   this.author=author;
//   this.year=year;
//   this.getsummary=function(){
//     return `${this.title} was written by ${this.author} in ${this.year}`
//   }
// }
// //instantiate
// const book1:Object=new Book("book one","john doe","1234")
// console.log(book1.getsummary())
// //slice
// let word="slice is cool!"
//     for(let i=0;i<word.length;i++){
//         console.log(word.slice(i,word.length))
//     }
