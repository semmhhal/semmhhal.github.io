
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
export function myFilter(arr:number[], func:(number:number)=>boolean):number[] {
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
export function myReduce(arr:number[], func:(acc:number,number:number)=>number, initialValue:number):number {
    let reduced:number=arr.reduce((number,acc)=>func(acc,number),initialValue)
    return  reduced;
    }