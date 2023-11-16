/*
a)	Copy an array
b)	Concatenate arrays into a new array
c)	Concatenate an array and a new array element
d)	Use an array as arguments
e)	Use Math.min and Math.max
f)	Use rest operator in function calls
You will need to use generic typing for copyArray and concat.   copyArray generic typing is given below.
Do the same pattern for concat.
*/

export function copyArray(oldArr: number[]): number[] {
    let newArr=[...oldArr]
    let copyofnewArr=[...newArr]
    copyofnewArr.push(4)
    return newArr

}

export function concat(arr1:number[],arr2:number[]):number[]{
    let newArr=arr1.concat(arr2)
    return newArr
 }

 export function findMin(...arr:number[]):number{
    let minimum= Math.min(...arr)
    return minimum
    }

export  function findProduct(...arr:number[]):number{
    return arr.reduce((product,num)=>product*=num,1)
    }
