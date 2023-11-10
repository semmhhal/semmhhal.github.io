
/**
 * 
 * @param {*} str 
 */
export function ucFirst(str:string):string {
 let word=str.charAt(0).toUpperCase()
  let newword =str.slice(1)
  word+=newword
 

return word
  }

  /**
   * 
   * @param {*} str 
   */
  export  function checkSpam(str:string):boolean {
 let newstr=str.toLowerCase()
 return newstr.includes("buy viagra now")||newstr.includes("free xxxxx")
  }

// /**
//  * 
//  * @param {*} str 
//  * @param {*} maxlength 
//  */
export   function truncate(str:string, maxlength:number):string {
  let length=str.length
  if(length>maxlength){
    return str.slice(0,19)+"…"
  }
  return str.slice(0,maxlength)
}


// /**
//  * 
//  * @param {Array} arr of numbers
//  * @returns {number} the total of the maximal subarray
 
//  */
export function getMaxSubSum(arr:number[]):any{
  let listSums = [];v  
}


export function camelize(str:string):string {
let newstr=""
if(str===newstr){
  return newstr
}
else if(
  for(let i=0;i<str.charAt(i).length;i++){
    if(str.charAt(i)==="-")
  }
)
  }


export function extractCurrencyValue(str:string):number{
  let newel=+str.slice(1)
  return newel
} 
