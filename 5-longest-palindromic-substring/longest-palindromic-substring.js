/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let n = s.length;

    for (let len = n; len > 0; len--) {
        for (let i = 0; i <= n - len; i++) {
            if (isPalindrome(i, i + len, s)) {
                return s.substring(i, i + len);
            }
        }
    }

    return "";

};

const isPalindrome = (i, j, s) => {
    let p = i, q = j - 1;

    while (p < q) {
        if (s.charAt(p) !== s.charAt(q)) {
            return false;
        }

        p++;
        q--;
    }

    return true;
}