
/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @returns 
 */
export function myMap(arr:number[], func:(num:number)=>number):number[] {
let doubled:number[]=arr.map(number=>func(number))
return doubled
}

/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @returns 
 */
export function myFilter(arr:number[], func:(num:number)=>number):number[] {
let filtered:number[]=arr.filter(num=>func(num))
return filtered;
}

/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @param {*} initialValue 
 * @returns 
 */
export function myReduce(arr:number[], func:(acc:number,numb:number)=>number, initialValue:number):number {
    let reduced:number=arr.reduce((sum,num,acc)=>(sum + func(acc,num),initialValue))
    return  reduced;
    }