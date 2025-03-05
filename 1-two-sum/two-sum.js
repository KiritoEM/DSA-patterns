/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let dict = new Map();

    for (let i = 0; i < nums.length; i++) {
        dict.set(nums[i], i);
    }

    for (let i = 0; i < nums.length; i++) {
        let val = target - nums[i];

        if (dict.has(val) && dict.get(val) !== i) {
            return [i, dict.get(val)];
        }
    }

    return [];
};