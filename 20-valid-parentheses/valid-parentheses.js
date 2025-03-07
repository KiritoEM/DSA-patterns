/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    const pattern = {
        ")": "(",
        "]": "[",
        "}": "{"
    }

    for (let char of s) {
        if (char === "(" || char === "[" || char === "{") {
            stack.push(char);
        }
        else {
            if (stack.length === 0) return false;

            const openBracket = stack.pop();

            if (openBracket !== pattern[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};