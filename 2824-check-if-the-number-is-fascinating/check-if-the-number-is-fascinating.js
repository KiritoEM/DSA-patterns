/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function (n) {
    let concatenatedNumber = n.toString() + (n * 2) + (n * 3);
    let set = new Set();

    for (let val of concatenatedNumber) {
        if (val === "0") return false;

        if (!(val >= 1 && val <= 9) || set.has(parseInt(val))) {
            return false;
        }

        set.add(parseInt(val));
    }

    return true;
};