
// //////
// interface Student{
//   studentId:number;
//   quizAnswers:number[];
// }

// const student1:Student={
// studentId:101,
// quizAnswers:[1,1,2,4]
// }
// const student2:Student={
//   studentId:102,
//   quizAnswers:[2,1,2,2]
// }
// const student3:Student={
//     studentId:103,
//     quizAnswers:[3,1,3,4]
// }

// student1;
// student2;
// student3;
// const studentQuizzes: Student[] = [
//   { studentId: 101, quizAnswers: [1, 1, 2, 4] },
//   { studentId: 102, quizAnswers: [2, 1, 2, 2] },
//   { studentId: 103, quizAnswers: [3, 1, 3, 4] },
// ];
// let correctAns=[3,1,2,4]
// function scores(studentQuizzes:Student[],correctAns:number[]):number[]{
//   let array1:number[]=[]

// for(let i=0;i<studentQuizzes.length;i++){
//   let totalcount=0;
//   let scores=studentQuizzes[i].quizAnswers
//   for(let j=0;j<scores.length;j++){
//     if(scores[j]===correctAns[j]){
//     totalcount++
//  }
// }
// array1.push(totalcount)
// }
// return array1
// }
// console.log(scores(studentQuizzes,correctAns))

// /////
// function gradequizlabeled(studentQuizzes:Student[],correctAns:number[]):Object[]{
//   interface StudentQ{
//     studentId:number,
//     Score:number,
//   }

//   let newarr:StudentQ[]=[]

//   for(let i=0;i<studentQuizzes.length;i++){
//     let counter=0;
//     let scores1=studentQuizzes[i].quizAnswers;
//     for(let j=0;j<scores1.length;j++){
//       if(scores1[j]===correctAns[j]){
//         counter++
//       }
//     }
//     newarr.push({studentId:studentQuizzes[i].studentId,Score:counter})
//   }
//   return newarr
// }
// console.log(gradequizlabeled(studentQuizzes,correctAns))

type CustomerRecord = {  //interface for the transaction object
  customerId: number;
  customerTransactions: number[];
}

type Bank = {    //interface for the bank object 
  transactionsDB: CustomerRecord[];
  saveTransaction: (customerId: number, amount: number) => void;
  debit: (customerId: number, amount: number) => void;
  credit: (customerId: number, amount: number) => void;
  getBalance: (customerId: number) => number;
  bankBalance: () => number;
}


export const bank = {} as Bank;  //define bank object as type Bank

bank.transactionsDB = [
  { customerId: 1, customerTransactions: [10, 50, -40] },
  { customerId: 2, customerTransactions: [10, 10, -10] },
  { customerId: 3, customerTransactions: [5, -5, 55] }];


/* this is complete, no need to modify.
Saves this amount to the customerTransactions array for customerId id. */
bank.saveTransaction = function (customerId: number, amount: number) {
  const customer = bank.transactionsDB.find(customer => customer.customerId === customerId);
  if (customer) {
      console.log(customer)
      customer.customerTransactions.push(amount);
  }
};

bank.bankBalance=function():number{
let sumtotal:number=0;
for(let i=0;i<bank.transactionsDB.length;i++){
let numbercoll=bank.transactionsDB[i].customerTransactions
for(let j=0;j<numbercoll.length;j++){
  sumtotal+=numbercoll[j]
}

}
return sumtotal

}
console.log(bank.bankBalance())

bank.getBalance=function(customerId:number):number{
  let total=0
  
  const customer=bank.transactionsDB.find(customer=>customer.customerId===customerId)
  if(customer){
  let arr1=bank.transactionsDB[0].customerTransactions
  for(let j=0;j<arr1.length;j++){
    total+=arr1[j]
  }

  }
  return total
  }
  console.log(bank.getBalance(1))

