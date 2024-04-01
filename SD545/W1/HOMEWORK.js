/**
 * 1.Create a function using function declaration named sum with one parameter of Array type, the
returned result is the sum of all elements which are greater than 20.

2. Create a function using function expression named getNewArray with one parameter of String
Array, return a new array which contains all string, length is greater than and equal to 5, and
contains letter ‘a’.

3. Implement an arrow function with feature below:

concat('hi', [1,2,3], ['Hello','world']) -> return result: ['h', 'i', 1,2,3, 'Hello','world']

 
 */


//1.
const array1 = [20, 19, 22, 43, 53];
const array2 = ['Semhal', 'Tina', 'Johnathan'];

function sum(array) {
    let newvalues = array.filter(element => element > 20);
    let totalsum = newvalues.reduce((accum, current) => accum + current);
    return totalsum;
}

console.log(sum(array1));

//2.

const getNewArray = function (array) {
    let newarray = array.filter(element => element.length > 5 && element.includes('a'));
    return newarray;
};
console.log(getNewArray(array2));

//3.
const concat = (a, b, c) => {
    let newarr = [...a, ...b, ...c];
    return newarr;
};

console.log(concat('hi', [1, 2, 3], ['Hello', 'world']));