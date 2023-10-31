// // //12345 5 times
let str=""
for(let i=1;i<=5;i++){
    str=str+i 
}   
  for(let j=1;j<=5;j++) {
    console.log(str)
 }
//1 22 333 4444 55555
let str1="";
for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        str1+=i
    }
    console.log(str1)
    str1=""
}

//5555 4444 333 22 1

let str2=""
for(let i=5;i>=1;i--){
    for(let j=i;j>=1;j--){
        str2=str2+i
    }
    console.log(str2)
    str2=""
}