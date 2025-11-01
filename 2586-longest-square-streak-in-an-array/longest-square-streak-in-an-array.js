/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function (nums) {
    nums.sort((a, b) => a - b);
    const set = new Set(nums);
    let maxStreak = 0;

    for (let num of nums) {
        const root = Math.sqrt(num);
        if (Number.isInteger(root) && set.has(root)) continue;

        let count = 1;
        let current = num;

        while (set.has(current * current)) {
            current = current * current;
            count++;
        }

        maxStreak = Math.max(maxStreak, count);
        if (maxStreak >= 5) break;
    }

    return maxStreak > 1 ? maxStreak : -1;
};