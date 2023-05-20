// Plus Minus: https://www.hackerrank.com/challenges/plus-minus/problem
// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.

const arr = [-4, 3, -9, 0, 4, 1];

const plusMinus = arr => {
    let denominator = arr.length;
    console.log(denominator);
    let positive = 0;
    let negative = 0;
    let zero = 0;
    arr.forEach(num => {
        if (num > 0) {
            positive += 1;
        } else if (num < 0) {
            negative += 1;
        } else {
            zero += 1;
        }
    })
    let posRatio = positive/denominator;
    let negRatio = negative/denominator;
    let zRatio = zero/denominator;
    console.log(posRatio.toFixed(6));
    console.log(negRatio.toFixed(6));
    console.log(zRatio.toFixed(6));
}

plusMinus(arr);