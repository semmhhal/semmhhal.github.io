/**
 *
 * @param {*} arr
 * @param {*} func
 * @returns
 */
export function myMap(arr, func) {
    let doubled = arr.map(number => func(number));
    return doubled;
}
/**
 *
 * @param {*} arr
 * @param {*} func
 * @returns
 */
export function myFilter(arr, func) {
    let filtered = arr.filter(number => func(number));
    return filtered;
}
/**
 *
 * @param {*} arr
 * @param {*} func
 * @param {*} initialValue
 * @returns
 */
export function myReduce(arr, func, initialValue) {
    let reduced = arr.reduce((number, acc) => func(acc, number), initialValue);
    return reduced;
}
