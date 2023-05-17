// Compare the triplets
// https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=true
const problemTitle = document.getElementById('problem-title');
problemTitle.innerHTML = 'Compare the triplets';


function compareTriplets(a, b) {
    let aScore = 0;
    let bScore = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) aScore++;
        else if (a[i] < b[i]) bScore++;
    }
    
    return [aScore, bScore];
}

const a = [5, 6, 7];
const b = [3, 6, 10];

console.log(compareTriplets(a, b));