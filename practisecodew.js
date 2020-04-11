// find the position of needle in array

function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
}

// basic mathematical operations

function basicOp(operation, value1, value2) {
    if (operation === '+') {
        return value1 + value2;
    }
    if (operation === '-') {
        return value1 - value2;
    }
    if (operation === '*') {
        return value1 * value2;
    }
    if (operation === '/') {
        return value1 / value2;
    }
}

// reverse individual words in string without changing the order of words

function reverseWords(str) {
    return str.split("").reverse().join("").split(" ").reverse().join(" ")
}

// if you can't sleep, count sheep

const countSheep = function (num) {
    let result = '';
    for (let i = 1; i <= num; i++) {
        result += i.toString() + ' sheep...';
    }
    return result;
}

// string to array

function stringToArray(string) {
    return string.split(' ');
}

// Is n divisible by x and y?

function isDivisible(n, x, y) {
    if (n % x === 0 && y % y === 0) {
        return true;
    } else {
        return false;
    }
}