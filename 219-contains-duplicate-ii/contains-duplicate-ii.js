/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    let seen = {};

    for (let i = 0; i < nums.length; i++) {
        if (seen.hasOwnProperty(nums[i]) && Math.abs(i - seen[nums[i]]) <= k) {
            return true;
        }
        seen[nums[i]] = i;
    }

    return false;
};