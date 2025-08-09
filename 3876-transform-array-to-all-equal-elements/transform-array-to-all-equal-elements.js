/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canMakeEqual = function (nums, k) {
    return check(nums, k, 1) || check(nums, k, -1);
};

const check = (nums, k, target) => {
    let a = [...nums]; //shallow copy original array 
    let stepCount = 0;

    for (let i = 0; i < a.length - 1; i++) {
        if (i + 1 < a.length && a[i] !== target) {
            a[i] *= -1;
            a[i + 1] *= -1;
            stepCount++;
            if (stepCount > k) return false;
        }
    }

    return a[a.length - 1] === target;
}