/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function (mat) {
    let res = [0, 0];

    for (let i = 0; i < mat.length; i++) {
        let countOne = 0;

        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 1) {
                countOne++;
            }
        }

        if (countOne > res[1]) {
            res = [i, countOne];
        }
    }

    return res;
};