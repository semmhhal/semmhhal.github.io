

//You can write and run the timer code here via npm run app 

// const oldArr = [1, 2, 3];
// function copyArray(oldArr: number[]): number[] {
//   let newArr=[...oldArr]
//   let copyofnewArr=[...newArr]
//   copyofnewArr.push(4)
//   return newArr
// }

// console.log(copyArray(oldArr))
/////

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// function concat(arr1:number[],arr2:number[]):number[]{
//    let newArr=arr1.concat(arr2)
//    return newArr
// }
// console.log(concat(arr1,arr2))

/////

// const arr2 = [4, 5, 6, 7, 8, 0];

// function findMin(arr:number[]):number{
// let minimum= Math.min(...arr)
// return minimum
// }
// const arr1 = [1, 2, 3];
// console.log(findMin(arr1))

// const arr1 = [1, 2, 3];
// const arr2 = [1,2,3,4,5];

// function findProduct(...arr:number[]):number{
// return arr.reduce((product,num)=>product*=num,1)
// }

// console.log(findProduct(1,2))

function findFactorial(n:number):number{
    let factorial=1

for(let i=n;i>0;i--){
factorial=factorial*i
}
return factorial
}
 console.log(findFactorial(5))

 function factorial(num:number):number{
    //base case
    if(num===1){
        return 1
    }
    else{
        return num* factorial(num-1)
    }
 }
 console.log(factorial(5))

 ///
 function countInstances(word:string,letter:string):number{
    if(word==="")
    return 0;

    else if(word[0]===letter){
      //check 
      return 1+ countInstances(word.substr(1),letter);
    }
      else{
        return countInstances(word.substr(1),letter)}
      }
    console.log(countInstances("All that is great and good.", "t"))

 