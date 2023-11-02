// Write code to create an array named scores and fill it with 5 test scores 10,
// 20, 30, 40 and 50.
// • Now write a function named findAverage, that takes an array as an
// argument and return average of the array values.
// • Call findAverage function passing array you created in step1 and save the
// return result in a variable, average.
// • Print the average, it should be 30 for this example.
// • Create a second array with values from 1 to 9 and find the average of the
// array values.
// • Should compute correct average for an array of any size.

let scores:number[]=[10,20,30,40,50]
let array19:number[]=[1,2,3,4,5,6,7,8,9]
function findAverage(array:number[]):number{
    let sum=0
let avg=0
  for(let i=0;i<array.length;i++)  {
    //get the sum total
    sum=sum+array[i]
    //find avg
  }
  avg =sum/array.length
  return avg
}
console.log(findAverage(scores))
console.log(findAverage(array19))

//
let matrix:number[][]=[[1,2,3],[4,5,6],[7,8,9]]
let total=0
function sumMatrix(arr:number[][]):number{
  for(const row of arr){
    for(const num of row){
      total+=num;
    }
  }

return total;
}
console.log("expect 45: ",sumMatrix(matrix))
