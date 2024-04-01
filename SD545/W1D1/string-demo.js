const coursename = 'MSD';
const str1 = 'this is string';
const str2 = "this is string";
const str3 = `this is string ${coursename}`; //template literal is powerful because it can make multiple lines, it can also refer to other vars.
const str4 = `${1 + 2}`;
console.log(str4);

function foo() {
    return 'hello';
}
const str5 = `${foo()} World`;
console.log(str5);

//const str6 = `${const i = 10}` //you cant do this is is a statement;