/*
Create the function topSalary(salaries) that returns the name of the top-paid person.
    If salaries is empty, it should return null.
    If there are multiple top-paid persons, return any of them.
P.S. Use Object.entries and destructuring to iterate over key/value pairs.
*/
export function topSalary(salaries) {
    if (Object.keys(salaries).length === 0) {
        return "none";
    }
    let maxnum = 0;
    let topPaid = null;
    for (const [name, salary] of Object.entries(salaries)) {
        if (salary > maxnum) {
            maxnum = salary;
            topPaid = name;
        }
    }
    return topPaid;
}
