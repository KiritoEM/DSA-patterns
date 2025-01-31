/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0;
    let l = 0, r = 1;

    while (r < prices.length) {
        if (prices[l] < prices[r]) {
            profit = Math.max(profit, prices[r] - prices[l]);
        }
        else {
            l = r;
        }

        r++;
    }

    return profit;
};