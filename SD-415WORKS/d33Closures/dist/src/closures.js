/**
 *
 * @param {Array} arr holding values
 * @returns {Function} returns a function that tests whether its argument is in the arr
 *
 */
export function inArray(arr) {
    return function (value) {
        let newArr = arr.filter((arrvalue) => value === arrvalue);
        return newArr.length > 0;
    };
}
/**
 *
 * @param {number} low is bottom of range
 * @param {number}  high is top of range
 * @returns {Function} returns a function that tests whether its argument is inside the range
 *
 */
export function inBetween(start, end) {
    return function (num) {
        return num >= start && num <= end;
    };
}
/**
 * @returns {Function} closure that returns it's number
 */
export function makeArmy() {
    let army = [];
    for (let i = 0; i < 10; i++) {
        army[i] = function () {
            return i;
        };
    }
    return army;
}
//army[0](); // the shooter number 0 shows 10
//army[5](); // and number 5 also outputs 10...
