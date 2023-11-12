
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

export function filterEven(arr:number[]):number[]{
let newarray=arr.filter(num=>num%2===0)
return newarray
}

export function filterOver10(peopleArray:Person[]):Person[] {
return peopleArray.filter(person=>person.age>10)
}

export function findEvenNum(arr:number[]):number|undefined{
    return arr.find(num => num % 2 === 0);

}

export function findEvenAge(peopleArray:Person[]):Person|undefined{
    return peopleArray.find(person=>person.age%2===0)
}

export function includesEvenNum(num:number[]):boolean{
    return num.includes(77);
}
export function includesOddNum(num:number[]):boolean{
    return num.includes(15);
}

export function includesEvenAge(arr:Person[]):boolean{
return arr.map(person=>person.age).includes(15)
}


