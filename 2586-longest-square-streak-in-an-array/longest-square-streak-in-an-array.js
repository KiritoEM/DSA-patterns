/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function (nums) {
    nums.sort((a, b) => a - b);
    let set = new Set(nums);
    let maxStreak = 0;

    for (let val of nums) {
        const root = Math.sqrt(val);

        if (set.has(root)) continue;

        let current = val;
        let subsequenceLength = 1;

        while (set.has(current * current)) {
            current = current * current;
            subsequenceLength++;
        }

        if (subsequenceLength >= 5) {
            maxStreak = 5;
            break;
        }

        maxStreak = Math.max(maxStreak, subsequenceLength);
    }

    return maxStreak > 1 ? maxStreak : -1;
};