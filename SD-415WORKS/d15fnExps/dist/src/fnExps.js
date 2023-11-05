/**
 *@returns {number} double the input
 */
export function double(num) {
    return num * 2;
}
/**
 * @returns {number} 100 times the input
 */
export function times100(num) {
    return num * 100;
}
/**
 * @returns {Array} creates a new array with function mapped to each element
 */
export function myMap(arr, callback) {
    const result = [];
    for (const ele of arr) {
        result.push(callback(ele));
    }
    return result;
}
