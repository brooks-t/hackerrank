// Given an array of integers, find the sum of its elements.
// For example, if the array ar = [1,2,3], 1+2+3 = 6, so return 6.
// https://www.hackerrank.com/challenges/simple-array-sum/problem?isFullScreen=true

const simpleArraySum = (ar) => {
    return ar.reduce((a, b) => a + b, 0);
}

// simplified version
const simpleArraySum2 = (ar) => ar.reduce((a, b) => a + b, 0);

console.log(simpleArraySum([1, 2, 3, 4, 10, 11])); // 31
console.log(simpleArraySum2([1, 2, 3, 4, 10, 21])); // 41