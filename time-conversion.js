// Time Conversion: https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true&h_r=next-challenge&h_v=zen
// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

let s = '12:45:54AM';

function timeConversion(s) {
    const [hour, minute, second] = s.slice(0,8).split(':');
    const ampm = s.slice(8,10);
    let newHour = parseInt(hour);
    
    if (ampm === 'PM' && hour !== '12') {
        return `${newHour += 12}:${minute}:${second}`;
    } else if (ampm === 'AM' && hour === '12') {
        return `00:${minute}:${second}`; 
    } else if (ampm === 'PM' && hour === '12') {
        return `${hour}:${minute}:${second}`;
    } else {
        return `${hour}:${minute}:${second}`;
    }
}

console.log(timeConversion(s));