/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function (nums) {
    nums.sort((a, b) => a - b);
    const set = new Set(nums);
    let maxStreak = 0;

    for (const val of nums) {
        let current = val;
        let streak = 0;

        while (set.has(current)) {
            streak++;
            const next = current * current;
            if (next > 1e5) break;
            current = next;
        }

        maxStreak = Math.max(maxStreak, streak);
    }

    return maxStreak > 1 ? maxStreak : -1;
};
