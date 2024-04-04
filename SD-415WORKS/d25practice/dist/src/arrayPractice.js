export function doubleNums(arr) {
    return arr.map(num => num * 2);
}
export function doubleAges(peopleArray) {
    return peopleArray.map(person => ({ ...person, age: person.age * 2 }));
}
export function filterEven(arr) {
    let newarray = arr.filter(num => num % 2 === 0);
    return newarray;
}
export function filterOver10(peopleArray) {
    return peopleArray.filter(person => person.age > 10);
}
export function findEvenNum(arr) {
    return arr.find(num => num % 2 === 0);
}
export function findEvenAge(peopleArray) {
    return peopleArray.find(person => person.age % 2 === 0);
}
export function includesEvenNum(num) {
    return num.includes(77);
}
export function includesOddNum(num) {
    return num.includes(15);
}
export function includesEvenAge(arr) {
    return arr.map(person => person.age).includes(15);
}
