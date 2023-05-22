// Birthday Cake Candles: https://www.hackerrank.com/challenges/birthday-cake-candles/problem

let candles = [3, 2, 1, 3];
let candles2 = [4, 4, 1, 3, 5, 6, 7, 8, 8, 8, 8, 8];

function birthdayCakeCandles(candles) {
    const tallest = candles.reduce((a, b) => a > b ? a : b, 0);
    let total = 0;
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] === tallest) {
            total++;
        }
    }
    return total;
}

console.log(birthdayCakeCandles(candles));
console.log(birthdayCakeCandles(candles2));