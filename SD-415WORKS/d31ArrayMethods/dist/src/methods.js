/*
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
The function should not modify the array. It should return the new array.
*/
export function filterRange(arr, a, b) {
    let result = arr.filter((num) => num >= a && num < b);
    return result;
}
/*
Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
The function should only modify the array. It should not return anything.
*/
export function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}
export const calculator = {
    methods: {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
    },
    calculate: function (str) {
        let arrOFcal = str.split(' ');
        let [a, Op, b] = arrOFcal;
        let A = parseInt(a);
        let B = parseInt(b);
        return this.methods[Op](A, B);
    },
    addMethod: function (name, fun) {
        this.methods[name] = fun;
    }
};
export function unique(arr) {
    let newName = arr.filter((elem, index, filarr) => {
        return filarr.indexOf(elem) === index;
    });
    return newName;
}
export function groupById(users) {
    // declare usersById to be an object with string keys and User values
    const usersById = users.reduce((acc, item) => {
        acc[item.id.toString()] = item;
        return acc;
    }, {});
    return usersById;
}
export function map2fullName(users) {
    let result = users.map(items => {
        return { fullName: items.name + ' ' + items.surname, id: items.id };
    });
    // FURTHER IMPLEMENTATION REQUIRED HERE
    return result;
}
export function sortByAge(users) {
    // FURTHER IMPLEMENTATION REQUIRED HERE
    users.sort((a, b) => a.age - b.age);
}
export function findOldest(users) {
    // FURTHER IMPLEMENTATION REQUIRED HERE
    let oldest = users.reduce((oldest, current) => (current.age > oldest.age ? current : oldest), users[0]);
    return oldest;
}
/* getAverageAge using reduce */
export function getAverageAge(users) {
    let result = users.reduce((sum, num) => sum += num.age, 0);
    return result / (users.length);
}
