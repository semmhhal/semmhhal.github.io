export function firstLast(names) {
    let newArr = [];
    for (let elements of names) {
        newArr.push(elements.split(" "));
    }
    let result = newArr.map(([fname, lname]) => ({ firstName: fname, lastName: lname }));
    return result;
}
export function replaceEnds(arr, num1, num2, num3, num4) {
    let newArr = arr.slice();
    newArr.splice(0, 2, num1, num2);
    newArr.splice(4, 5, num3, num4);
    return newArr;
}
export function square(arr) {
    let newArr = [];
    for (let nums of arr) {
        nums = nums * nums;
        newArr.push(nums);
    }
    return newArr;
}
export function higho(func, arr) {
    let result = func(arr);
    return result;
}
export function absVal(arr) {
    let newArr = [];
    for (let nums of arr) {
        if (nums < 0) {
            nums = nums * -1;
            newArr.push(nums);
        }
        else
            newArr.push(nums);
    }
    return newArr;
}
export function calculateDailyTotalDuration(arr) {
    let total = 0;
    for (let session of arr) {
        let durations = session.duration;
        total += durations;
    }
    return total;
}
export function calculateTotalDuration(arr) {
    let Overalltotal = 0;
    for (let days of arr) {
        let sessionTotals = days.Session;
        for (let durations of sessionTotals) {
            let eachDuration = durations.duration;
            Overalltotal += eachDuration;
        }
    }
    return Overalltotal;
}
export function getAllSessions(arr) {
    let allsessions = [];
    for (let day of arr) {
        allsessions = allsessions.concat(day.Session);
    }
    return allsessions;
}
export function getAllSessionsForUser(dailyRecord, num) {
    let lnewresult = getAllSessions(dailyRecord).filter(item => item.userId === num);
    return lnewresult;
}
export function getAllDurations(dailyRecord) {
    let newresult = getAllSessions(dailyRecord).map(item => item.duration);
    return newresult;
}
