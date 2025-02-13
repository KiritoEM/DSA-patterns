/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let n = prices.length;

    if (n === 0) return 0;

    let dp = new Array(n + 1).fill(0);

    let minPrice = prices[0];

    for (let i = 1; i <= n; i++) {
        dp[i] = Math.max(dp[i - 1], prices[i] - minPrice);
        minPrice = Math.min(prices[i], minPrice);
    }

    return dp[n - 1];
};