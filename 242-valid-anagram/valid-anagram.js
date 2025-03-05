/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let freq = {};

    for (let char of s) {
        if (freq[char]) {
            freq[char]++;
        }
        else {
            freq[char] = 1;
        }
    }

    for (let char of t) {
        if (!freq[char]) {
            return false;
        }

        freq[char]--;
    }

    return true;
};