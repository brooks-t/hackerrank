// Staircase: https://www.hackerrank.com/challenges/staircase/problem
// Print a staircase of size n using # symbols and spaces.

n = 6;

const staircase = (n) => {
    let str = '';
    let spaces = n - 1;
    let hashes = 1;
    for (let i = 0; i < n; i++) {
        str += ' '.repeat(spaces) + '#'.repeat(hashes) + '\n';
        spaces--;
        hashes++;
    }

    return str;
}

console.log(staircase(n));