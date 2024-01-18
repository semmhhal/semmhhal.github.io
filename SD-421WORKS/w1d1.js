// let arr = [1, 2, 3, 4, 5, 6]
// function countEven(arr) {
//     let count = 0
//     for (nums of arr) {
//         if (nums % 2 == 0) {
//             count++
//         }
//     }
//     return count
// }
// console.log(countEven(arr))

// Algorithm countEven(arr){
// counter<-0
// for i<- 1 to arr-1 do 
// if arr[i]%2==0 then 
// increment counter i
// }
// return counter

let nums = [0, 7, 2, 11, 15]
let target = 9

function twoSums(nums, target) {
    let newarr = []
    for (i = 0; i < nums.length; i++) {
        for (j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                newarr.push(i, j);
            }
        }
    }
    return newarr;
}
console.log(twoSums(nums, target))
