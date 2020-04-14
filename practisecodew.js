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

//maximum multiple 

function maxMultiple(divisor, bound) {
    return bound - bound % divisor
}

// count the divisors of a number 

function getDivisorsCnt(n) {
    for (var d = 0, i = n; i > 0; i--) {
        if (n % i == 0) d++;
    }

    return d;
}

// remove spaces from string 

function noSpace(x) {
    return x.split(' ').join('')
}

// return day

function whatday(num) {
    switch (num) {
        case 1:
            return "Sunday";
            break;
        case 2:
            return "Monday";
            break;
        case 3:
            return "Tuesday";
            break;
        case 4:
            return "Wednesday";
            break;
        case 5:
            return "Thursday";
            break;
        case 6:
            return "Friday";
            break;
        case 7:
            return "Saturday";
    }
    return "Wrong, please enter a number between 1 and 7";
}

// sum of the first nth term of series

function SeriesSum(n) {
    for (var s = 0, i = 0; i < n; i++) {
        s += 1 / (1 + i * 3)
    }
    return s.toFixed(2);
}

// Binary Addition

function addBinary(a, b) {
    return (a + b).toString(2)
}

// Sorted? yes? no? how?

function isSortedAndHow(array) {
    let sorted = array.slice().sort((a, b) => a - b);
    let descendArr = sorted.slice().reverse();

    if (array.join() === sorted.join()) {
        return "yes, ascending";
    } else if (array.join() === descendArr.join()) {
        return "yes, descending";
    } else {
        return 'no';
    }
}

// Stop gninnipS My sdroW!

function spinWords(string) {
    return string.replace(/\w{5,}/g, function (w) { return w.split('').reverse().join('') })
}

//descending order 

function descendingOrder(n) {
    return parseInt(String(n).split('').sort().reverse().join(''))
}

//printer errors

function printerError(s) {
    const colours = 'abcdefghijklm';
    let errors = 0;
    let correct = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < colours.length; j++) {
            if (colours[j] === s[i]) {
                correct++;
            }
        }

    }
    errors = s.length - correct;
    return `${errors}/${s.length}`
}

// get the middle character 

function getMiddle(s) {
    if (s.length % 2 === 0) {
        return s[(s.length / 2) - 1] + s[s.length / 2];
    } else {
        return s[Math.floor(s.length / 2)];
    }
}

// dubstep

function songDecoder(song) {
    let decoded = [];
    let str = song.split("WUB");
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== "") {
            decoded.push(str[i]);
        }
    }
    return decoded.join(" ");
}

// sort array by word length

function sortByLength(array) {
    return array.sort(function (a, b) {
        return a.length - b.length;
    })
};

//reverse letters 

function reverseLetter(str) {
    return str.replace(/[^a-z]/g, '').split("").reverse().join("")
}

// split camelCase 

function solution(string) {
    return string.replace(/([a-zA-Z])(?=[A-Z])/g, '$1 ')
}

// Regex Password Validation

function validate(password) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/.test(password);
}

// Duplicate Encoder

function duplicateEncode(word) {
    let string = "";
    let lowerCase = word.toLowerCase();
    for (let i = 0; i < lowerCase.length; i++) {
        if (lowerCase.indexOf(lowerCase[i]) === lowerCase.lastIndexOf(lowerCase[i])) {
            string += "(";
        } else {
            string += ")";
        }
    }
    return string;
}

// remove vowels from string 

function disemvowel(str) {
    return str.replace(/[aeiou]/ig, '');
}

// Greet Me 

var greet = function (name) {
    const lowName = name.toLowerCase();
    const capName = lowName.charAt(0).toUpperCase() + lowName.slice(1);
    return "Hello " + capName + "!";
};

// caffeine script 
function caffeineBuzz(n) {
    if (n % 12 === 0) return "CoffeeScript";
    if (n % 6 === 0) return "JavaScript";
    if (n % 3 === 0) return "Java";
    return "mocha_missing!";
}

// square every digit 

function squareDigits(num) {
    const dig = num.toString().split('');
    const squared = dig.map(n => n * n);
    const squareDig = squared.join('')
    return parseInt(squareDig)
}

//Isograms

function isIsogram(str) {
    const string = str.toLowerCase();
    for (let i = 0; i < string.length; i++) {
        if (string.indexOf(str[i]) !== string.lastIndexOf(str[i])) {
            return false
        }
    }
    return true
}