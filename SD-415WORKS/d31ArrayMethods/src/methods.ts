
/* 
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
The function should not modify the array. It should return the new array.
*/
export function filterRange(arr: number[], a: number, b: number): number[] {
let result=arr.filter((num)=>num>=a && num<b)

    return result;
}

/*
Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
The function should only modify the array. It should not return anything.
*/
export function filterRangeInPlace(arr: number[], a: number, b: number): void{
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
          arr.splice(i, 1);
          i--; 
        }
}
}


type Calculator = {
    methods: { [key: string]: (a: number, b: number) => number };
    calculate: (str: string) => number;
    addMethod: (name: string, func: (a: number, b: number) => number) => void;
}
export const calculator: Calculator = {

    methods: {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
    },
    calculate: function (str: string): number {
        let arrOFcal = str.split(' ')
        let [a, Op, b] = arrOFcal
        let A = parseInt(a)
        let B = parseInt(b)
        return this.methods[Op](A, B)
    },
    addMethod: function (name: string, fun: (a: number, b: number) => number): void {
        this.methods[name] = fun;
    }

}

export function unique(arr: string[]): string[] {
    let newName = arr.filter((elem, index, filarr) => {
        return filarr.indexOf(elem) === index;
    })
    return newName
}

export type User = {
    id: string;
    name: string;
    age: number;
}

export function groupById(users: User[]): { [key: string]: User } {
    // declare usersById to be an object with string keys and User values
    const usersById: {[key: string]: User } = users.reduce((acc:any, item)  =>  {
        acc[item.id.toString()]= item 
        return acc},{} 
        )

    return usersById;
}

type SurnameUser = {
    name: string;
    surname: string;
    id: number;
}

type FullNameUser = {
    fullName: string;
    id: number;
}


export function map2fullName(users: SurnameUser[]): FullNameUser[] {
    let result: { fullName: string, id: number }[] =  users.map(items => {
       return {fullName: items.name + ' ' + items.surname, id: items.id}
    })
    // FURTHER IMPLEMENTATION REQUIRED HERE

    return result;
}


export function sortByAge(users: User[]): void {
    // FURTHER IMPLEMENTATION REQUIRED HERE
    users.sort((a, b) => a.age - b.age);
}

export function findOldest(users: User[]): User {
   
    // FURTHER IMPLEMENTATION REQUIRED HERE
  
    let oldest = users.reduce((oldest, current) => (current.age > oldest.age ? current : oldest), users[0]);

    return oldest;
}

/* getAverageAge using reduce */
export function getAverageAge(users: User[]): number {
   let result=users.reduce((sum,num)=>sum+=num.age,0)
    return result / (users.length);
}