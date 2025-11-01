/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function (nums) {
    nums.sort((a, b) => a - b)
    let set = new Set(nums);
    let streakCount = 0;

    set.forEach((val) => {
        let subsequence = [val];
        let current = val;

        while (set.has(current * current)) {
            current = current * current;
            subsequence.push(current);
        }

        if (subsequence.length >= 5) {
            streakCount = 5;
            return;
        }

        streakCount = Math.max(streakCount, subsequence.length);
    })

    return streakCount > 1 ? streakCount : -1;
};

