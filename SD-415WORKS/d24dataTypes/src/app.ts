
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

function compareNumeric(a:number,b:number):number{
  const a1=a.toString()
  const b1=b.toString()

  if(a>b) return 1
  if(a==b) return 0
  if(a<b) return -1
  return 0

}
let arr=[1,15,2]
arr.sort(compareNumeric)
console.log(arr)