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