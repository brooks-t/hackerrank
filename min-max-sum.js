// Mini-max sum: https://www.hackerrank.com/challenges/mini-max-sum/problem
// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.


function miniMaxSum(arr) {
    let max = 0;
    let min = Infinity;
    for (let i = 0; i < arr.length; i++) {
        let temp = arr.reduce((a, b) => a + b, 0);
        temp -= arr[i];
        max = max > temp ? max : temp;
        min = min < temp ? min : temp;
    }
    console.log(`${min} ${max}`);
}

console.log(miniMaxSum([1, 2, 3, 4, 5]));