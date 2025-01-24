/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function (n, logs) {
    let currIndex = logs[0][0];
    let maxUnit = logs[0][1];

    for (let i = 1; i < logs.length; i++) {
        let unitTime = logs[i][1] - logs[i - 1][1];

        if (unitTime > maxUnit || (unitTime === maxUnit && logs[i][0] < currIndex)) {
            maxUnit = unitTime;
            currIndex = logs[i][0];
        }
    }

    return currIndex;
};
