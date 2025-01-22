/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {

        let currSum = 0;

        for (let j = i; j < nums.length; j++) {
            currSum += nums[j];

            if (currSum === k) {
                count++;
            }
        }
    }

    return count;
};