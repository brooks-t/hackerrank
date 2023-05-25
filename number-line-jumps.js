// Number Line Jumps: https://www.hackerrank.com/challenges/kangaroo/problem
// Will the Kangaroos meet at the same location at the same time? Yes or No?

const kangaroo = (x1, v1, x2, v2) => {
    if(v1 <= v2) return 'NO';
    if((x2 - x1) % (v1 - v2) === 0) return 'YES';
    return 'NO';
}