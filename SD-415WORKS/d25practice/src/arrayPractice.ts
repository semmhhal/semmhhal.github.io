
export type Person = {
    name: string,
    age: number
}

export function doubleNums(arr:number[]):number[]{
return arr.map(num => num * 2);
}

export function doubleAges(peopleArray: Person[]): Person[] {
    return peopleArray.map(person => ({...person,age: person.age * 2 }));
  }

export function filterEven(arr){

}

export function filterOver10(arr) {

}

export function findEvenNum(arr){

}

export function findEvenAge(arr){

}

export function includesEvenNum(arr){

}

export function includesEvenAge(arr){

}


