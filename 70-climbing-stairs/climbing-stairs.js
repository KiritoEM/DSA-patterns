/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let dp = new Array(n + 1).fill(0);

    dp[0] = 1; //when in roof
    dp[1] = 1; //first step

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 2] + dp[i - 1];
    }

    return dp[n];
};