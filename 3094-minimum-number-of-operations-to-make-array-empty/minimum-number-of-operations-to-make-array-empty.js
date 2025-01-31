/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    let map = {};

    for (let num of nums) {
        if (map[num]) {
            map[num]++;
        } else {
            map[num] = 1;
        }
    }

    let operations = 0;

    for (let [key, val] of Object.entries(map)) {
        if (val === 1) {
            return -1;
        }
        operations += Math.ceil(val / 3);
    }

    return operations;
};
