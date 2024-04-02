//const condition = "" || undefined || 0 || 0.0 || null || NaN || false; //all of these are falsey
const condition = 2 && "abc" && [] && {}; //the empty array is an object //all are truthy
if (condition) {
    console.log('truthy..');
}
else {
    console.log('falsy');
}

console.log('IE6' > 0); //when we do logical operateros they must be a number 
console.log('IE6' == 0);//when we do logical operateros they must be a number 
console.log('IE6' < 0);//when we do logical operateros they must be a number 