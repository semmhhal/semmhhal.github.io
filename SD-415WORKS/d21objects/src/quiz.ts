
export interface StudentQuiz {
    studentId: number,
    quizAnswers: number[]
}

export function gradeStudent(studentQuizzes: number[], CORRECT_ANSWERS: number[]): number {
let counter=0;
for(let i=0;i<studentQuizzes.length;i++){
    if(CORRECT_ANSWERS[i]===studentQuizzes[i]){
        counter++
    }
}
return counter
}

export function gradeQuiz(studentQuizzes: StudentQuiz[], CORRECT_ANSWERS: number[]): number[] {
    let newarr: number[] = [];
  
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

export function gradeQuizLabeled(studentQuizzes: StudentQuiz[], CORRECT_ANSWERS: number[]): Object[]{
    interface StudentQ {
        id: number,
        score: number
    }
    let newarr: StudentQ[] = [];
  
    for (let i = 0; i < studentQuizzes.length; i++) {
      let counter = 0;
      let scores1 = studentQuizzes[i].quizAnswers;
  
      for (let j = 0; j < scores1.length; j++) {
        if (CORRECT_ANSWERS[j] === scores1[j]) {
          counter++;
        }
      }
  
      newarr.push({ id: studentQuizzes[i].studentId, score: counter });
    }
  
    return newarr;
  }



