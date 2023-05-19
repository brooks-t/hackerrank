// A Very Big Sum
// https://www.hackerrank.com/challenges/a-very-big-sum/problem

//const challengeTitle = document.getElementById("challenge-title");
//challengeTitle.innerHTML = "A Very Big Sum";

const aVeryBigSum = ar => ar.reduce((a,b) => a + b, 0);
const ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

console.log(aVeryBigSum(ar));



