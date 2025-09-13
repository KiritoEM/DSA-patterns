/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function (nums) {
    let p = 0, q = 1;

    if (nums.length === 1) return true;

    while (p < nums.length && q < nums.length) {
        const first = nums[p];
        const second = nums[q];

        if ((isOdd(first) && isOdd(second)) || (isEven(first) && isEven(second))) {
            return false;
        }

        p++;
        q++;
    }

    return true;
};

const isOdd = (n) => {
    return n % 2 !== 0;
}

const isEven = (n) => {
    return n % 2 === 0;
}