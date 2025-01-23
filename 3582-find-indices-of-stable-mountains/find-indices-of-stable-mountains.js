/**
 * @param {number[]} height
 * @param {number} threshold
 * @return {number[]}
 */
var stableMountains = function (height, threshold) {
    let res = [];

    for (let i = 0; i < height.length; i++) {
        if (i < height.length - 1 && height[i] > threshold) {
            res.push(i + 1);
        }
    }

    return res;
};