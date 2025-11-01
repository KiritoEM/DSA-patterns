/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function (nums) {
    nums.sort((a, b) => a - b);
    const set = new Set(nums);
    const memo = new Map(); // cache: num -> longueur de la chaîne
    let maxStreak = 0;

    const dfs = (num) => {
        if (memo.has(num)) return memo.get(num);
        const next = num * num;
        let length = 1;
        if (set.has(next)) length += dfs(next);
        memo.set(num, length);
        return length;
    };

    for (const num of nums) {
        const root = Math.sqrt(num);
        if (Number.isInteger(root) && set.has(root)) continue; // ne pas recommencer une sous-chaîne

        maxStreak = Math.max(maxStreak, dfs(num));
        if (maxStreak >= 5) break; // petit bonus pour early exit
    }

    return maxStreak > 1 ? maxStreak : -1;
};
