// Grading Students: https://www.hackerrank.com/challenges/grading/problem

const grades = [73, 67, 38, 33];

function gradingStudents(grades) {
    const staticGrade = ['0', '1', '2', '5', '6', '7'];
    const newGrades = grades.map((grade)=> {
        if (grade < 38) {
            return grade;
        } else if (staticGrade.includes(grade.toString()[1])) {
            return grade;
        } else if (grade.toString()[1] === '3' || grade.toString()[1] === '8') {
            return grade + 2;
        } else if (grade.toString()[1] === '4' || grade.toString()[1] === '9') {
            return grade + 1;
        } else {
            return "Error";
        }
    })
    return newGrades;
}

console.log(gradingStudents(grades));
