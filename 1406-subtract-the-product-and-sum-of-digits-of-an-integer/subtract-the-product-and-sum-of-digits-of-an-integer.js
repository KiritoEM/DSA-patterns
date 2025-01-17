/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
    let arr = n.toString().split("").map((n) => parseInt(n));
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    let product = arr.reduce((acc, curr) => acc * curr);

    return product - sum;
};