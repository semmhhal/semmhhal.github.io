console.log("in app.ts", "sum of [1,2,3] is: ", sum([1, 2, 3]));
/**
 *
 * @param {number} aa is a number
 * @param {number} b is a number
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
export function maxOfThree(aa, b, c) {
    if (aa > b && aa > c)
        return aa;
    else if (b > aa && b > c)
        return b;
    else if (aa === b && aa > c)
        return aa;
    else
        return c;
}
/**
 *
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
export function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
/**
 *
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
export function multiply(arr) {
    let multiple = 1;
    for (let i = 0; i < arr.length; i++) {
        multiple *= arr[i];
    }
    return multiple;
}
/* 4. findLongestWord */
/**
 * takes an array of words and returns the length of the longest one
 * @param {*} arr of words
 * @returns {number} length of longest word
 */
export function findLongestWord(arr) {
    let longest = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest)
            longest = arr[i].length;
    }
    return longest;
}
//5.Reverse an Array 
export function reverseArray(arr) {
    let newarr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newarr.push(arr[i]);
    }
    return newarr;
}
export function reverseArrayInPlace(arr) {
    let j = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        j.push(arr[i]);
        arr.pop();
    }
    for (let i = 0; i <= j.length - 1; i++) {
        arr.push(j[i]);
    }
    return arr;
}
/* 6. Write a function that takes two integers as inputs and returns a 2-dimensional array containing sequential numbers across each row as follows:
describe("generate array", function () {
    const expected33 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const expected23 = [ [1, 2, 3], [4, 5, 6]];
    const expected21 = [ [1], [2]];
     assert.deepEqual(generateArray(3,3), expected33); */
/**
 *
 * @param {*} rows num rows
 * @param {*} cols num cols
 * @returns {Array} 2d array with entries i + j
 */
export function generateArray(rows, cols) {
    //IMPLEMENT THIS 
    return [[0]];
}
