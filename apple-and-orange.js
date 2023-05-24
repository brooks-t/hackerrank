// Apple and Orange: https://www.hackerrank.com/challenges/apple-and-orange/problem

const s = 7;
const t = 11;
const a = 5;
const b = 15;
const apples = [-2, 2, 1];
const oranges = [5, -6];

const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
    let appleCount = 0;
    let orangeCount = 0;

    for (let i = 0; i < apples.length; i++) {
        if (a + apples[i] >= s && a + apples[i] <= t) {
            appleCount++;
        }
    }

    for (let i = 0; i < oranges.length; i++) {
        if (b + oranges[i] >= s && b + oranges[i] <= t) {
            orangeCount++;
        }
    }

    console.log(appleCount);
    console.log(orangeCount);
}

countApplesAndOranges(s, t, a, b, apples, oranges);