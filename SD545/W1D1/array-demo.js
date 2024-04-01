const countries = ['Mexico', 'US', 'China', 'Canada'];
const newcountries = countries.filter((country, arr) => {
    console.log(country, arr);
    return country.length > 5;
}).map((country, index, arr) => {
    console.log(country, index, arr);
    return `Hi, ${country}`;
});
//always always element,index and array with their respective position
console.log(newcountries);

countries1 = countries.filter(country => country.length > 5)
    .map((country, i) => ({ countryid: i, name: country }));

console.log(countries1);

const grades = [88, 98, 100, 90];
newgrades = grades.filter(grade => grade > 90).reduce((accum, current, index, array) => {
    console.log(accum, current, index, array);
    return current + accum;
}, 0);
/**
 * 1st loop: accumlated 0, current 99, index 0, array, accum = 0+99
 * 2nd loop accum 99, current 100, index 1, accum= 100+99
 * 3rd loop accum 199, current 95, index 2, accum= 199+95
 */

const average = grades.filter(grade => grade > 90).reduce((accum, current, index, array) => accum + current / array.length);

console.log(newgrades);
console.log(average)
//compute avg: 2 ways
/**
 * 1,2,3
 * 
 * (1,2,3)/3
 * 1/3+2/3+3/3
 */