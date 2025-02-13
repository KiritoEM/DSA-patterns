/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
    let count = 0;
    let s = word;

    while (sequence.includes(s)) {
        count++;
        s += word;
    }

    return count;
};