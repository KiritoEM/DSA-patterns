/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function (n) {
    let i = 2;

    while (i <= (n - 2)) {
        if (!checkPalindrome(i, n)) {
            return false;
        }

        i++;
    }

    return true;
};

const checkPalindrome = (i, n) => {
    const baseN = n.toString(i);

    return baseN.toString().split("").reverse() === baseN;
}