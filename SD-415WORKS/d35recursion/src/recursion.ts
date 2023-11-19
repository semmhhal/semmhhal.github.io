
export   { sumTo, factorial, fibonacci, outputList, outputListLoop, reverseList, reverseListLoop, TreeNode, sumTreeValues}

function sumTo(n: number): number {
    if (n == 1) 
    return 1;
    else {
    return 1 + sumTo(n - 1)};
}

function factorial(n: number): number {

    if(n===1){
   return 1}
    else{
   return n* factorial(n-1)}
}

function fibonacci(num:number):number{
    if(num<=1)
    return num
    else 
    return fibonacci(num-1) + fibonacci(num-2)
}

function outputList(list:List|null|undefined):void{
    if(list===null|| list===undefined){
    return;
    }
    else{
        console.log(list.value);
        outputList(list.next);
    }
}

function outputListLoop(list:List|null):void{
    while(list!==null){
      console.log(list.value)
      list=list.next
    }
  }
  function reverseList(list:List):any{
    if(list.next===null){
    console.log(list.value)
    return "done"
}
    else{
    let c=reverseList(list.next)
    console.log(list.value)
    return c
    }
    }


    function reverseListLoop(list:List|null):void{
        while(list!==null)
        list=list.next
        console.log(list.value)
    }

interface List{
    value: number;
    next: List | null;
}
type TreeNode = {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;
}


