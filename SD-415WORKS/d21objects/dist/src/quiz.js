export function gradeStudent(studentQuizzes, CORRECT_ANSWERS) {
    let counter = 0;
    for (let i = 0; i < studentQuizzes.length; i++) {
        if (CORRECT_ANSWERS[i] === studentQuizzes[i]) {
            counter++;
        }
    }
    return counter;
}
export function gradeQuiz(studentQuizzes, CORRECT_ANSWERS) {
    let newarr = [];
    for (let i = 0; i < studentQuizzes.length; i++) {
        let counter = 0;
        let scores = studentQuizzes[i].quizAnswers;
        for (let j = 0; j < scores.length; j++) {
            if (CORRECT_ANSWERS[j] === scores[j]) {
                counter++;
            }
        }
        newarr.push(counter);
    }
    return newarr;
}
// export function gradeQuizLabeled(studentQuizzes: StudentQuiz[], CORRECT_ANSWERS: number[]): Object[]{
//     interface StudentQ {
//         studentId: number,
//         quizAnswers: number
//     }
//     let newarr: StudentQ[] = [];
//     for (let i = 0; i < studentQuizzes.length; i++) {
//       let counter = 0;
//       let scores1 = studentQuizzes[i].quizAnswers;
//       for (let j = 0; j < scores1.length; j++) {
//         if (CORRECT_ANSWERS[j] === scores1[j]) {
//           counter++;
//         }
//       }
//       newarr.push({ studentId: studentQuizzes[i].studentId, quizAnswers: counter });
//     }
//     return newarr;
//   }
