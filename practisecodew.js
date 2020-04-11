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

// function greet return hello world

function greet() {
    return "hello world!";
}

// counting duplicates 

function duplicateCount(text) {
    let result = 0,
        duplicates = {};
    text.toLowerCase().split('').map(str => {
        if (!duplicates.hasOwnProperty(str)) {
            duplicates[str] = 0;
        } else {
            if (duplicates[str] === 0) {
                result += 1;
            }
            duplicates[str] = duplicates[str] + 1;
        }
    });
    return result;
}

//the coupon code 

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    currentDate = new Date(currentDate);
    expirationDate = new Date(expirationDate);
    if (enteredCode === correctCode && currentDate <= expirationDate) {
        return true;
    } else {
        return false;
    }
}

// Beginner Series #3 Sum of Numbers

function getSum(a, b) {
    let total = 0;
    if (a === b) {
        return a;
    }

    if (a < b) {
        for (let i = a; i <= b; i++) {
            total += i;
        }
        return total;
    }

    if (b < a) {
        for (let i = b; i <= a; i++) {
            total += i;
        }
        return total;
    }
}

// list filtering (Filter numbers out of an array)

function filter_list(l) {
    let numbers = l.filter((item) => typeof item === 'number');
    return numbers;
}