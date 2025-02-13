/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let p = 0, q = 0;

    while (q < t.length) {
        if (s[p] === t[q]) {
            p++;
        }
        q++;
    }

    return p === s.length;
};