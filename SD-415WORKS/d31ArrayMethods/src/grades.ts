/*
This file contains  code for a quiz object. The quiz object has a key property that contains Answer objects that
each have a property for the correct answer and another for an identifier of the question.  The way to calculate scores 
for this data structure is to order the answers for a given student according to the qid property and do the same 
for the key.  Then compare the two lists of answers (parallel arrays) and add up the number of matches.  

You need to implement the three methods.

This is a good example of using a comparator function to sort an array of objects and working with a data structure of nesed
arrays and objects.

*/

type Student = { sid: number, answers: Answer[] };
type Answer = { qid: number, ans: string };
type Key = Answer[];

type Quiz = {
    students: Student[],
    key: Key, 
    answerComparator: (ans1: Answer, ans2: Answer) => number,
    scoreStudent: (sid: number) => number,
    getAverage: () => number
};
export const quiz = {} as Quiz;
quiz.students = [{ sid: 10, answers: [{ qid: 2, ans: "b" }, { qid: 3, ans: "a" }, { qid: 1, ans: "b" }] },
{ sid: 11, answers: [{ qid: 1, ans: "e" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }] },
{ sid: 12, answers: [{ qid: 3, ans: "b" }, { qid: 2, ans: "a" }, { qid: 1, ans: "d" }] }];


quiz.key = [{ qid: 1, ans: "b" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }];

/**
 * 
 * @param {Object} ans1 is an answer object
 * @param {Object} ans2 is an answer object 
 * @returns {number} difference of the identifiers
 */
export function answerComparator(ans1:Answer, ans2:Answer):number{
    if(ans1.qid < ans2.qid )
        return -1
        
    if(ans1.qid > ans2.qid)
        return 1
    return 0
//IMPLEMENT THIS
}

/**
 * 
 * @param {*} sid student id
 * @returns {number} score for student
 * find this student
 * sort the student answers
 * compare them against key and add up matches
 */
quiz.scoreStudent = function (sid):number {
let student1 = quiz.students.filter(item => item.sid === sid) 
let total:number=0
let studs1:Answer[] =[];
for(let studs of student1){
  studs1 = studs.answers.sort(answerComparator)
console.log(studs1)
}
for(let i = 0; i < studs1.length; i++){
if(quiz.key[i].ans === studs1[i].ans)
total = total +1
    }  
  
console.log(total)
return total
}
quiz.scoreStudent(12)
/**:
 * @returns {number} average score of all students
 * go through list of students and get score of each, then the average
 */
quiz.getAverage = function():number{
const totalScore = quiz.students.reduce((sum, student) => sum + quiz.scoreStudent(student.sid), 0);
const averageScore = totalScore / quiz.students.length;
return averageScore;
};
console.log(quiz.getAverage().toFixed(3))


