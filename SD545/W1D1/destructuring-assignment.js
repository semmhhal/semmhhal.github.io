const arr = [33, 'John', 9, 99];

const [a, b] = arr;
console.log(a, b);

const person = {
    fname: 'John',
    lname: 'smith',
    age: 20
};
const { firstname: fname, lastname: lname } = person;
console.log(firstname, lastname);