let array=[123,"apple",true,[1,2],{1:"apple"}]
arr2=[]
for(i=0;i<=array.length-1;i++){
 
  if (typeof array[i]!=="object"){
    arr2.push(array[i].toString().length)
  }
 else if(Array.isArray(array[i])){
    arr2.push(array[i].length)
  }
 else{
    arr2.push(0)
 }
  }
console.log(arr2)