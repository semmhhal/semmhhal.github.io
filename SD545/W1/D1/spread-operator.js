/**
 * ... rest paramater, spread operator
 */
function max(a, ...rest) {
    console.log(a, rest);
}
max(1, 2); //rest

///

const str = 'Hi';
const arr = [1, 2, 3];

function concat(a, b) {
    return [...str, ...arr];
}
console.log(concat(str, arr));//spread
//['H','i','1','2','3']

const person = {
    id: 123,
    username: 'John',
    gender: 'F',
    age: 20


};
const newPerson = { ...person, age: 21 };
//{...person} =>create a new object with properties with values exactly same as person then override
console.log(newPerson);