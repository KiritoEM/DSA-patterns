/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    let dict = new Set(wordDict);
    let memo = {};

    return findWord(0, dict, s, memo);
};

const findWord = (i, dict, s, memo) => {
    if (i === s.length) {
        return true;
    }

    if (memo[i] !== undefined) {
        return memo[i];
    }

    for (let j = i; j < s.length; j++) {
        if (dict.has(s.substring(i, j + 1)) && findWord(j + 1, dict, s, memo)) {
            memo[i] = true;
            return true;
        }
    }

    memo[i] = false;
    return memo[i];
}