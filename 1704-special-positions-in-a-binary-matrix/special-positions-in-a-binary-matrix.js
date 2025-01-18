/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
    let special = 0;

    for (let i = 0; i < mat.length; i++) {
        let index = checkRow(mat, i);

        if (index !== -1 && checkCol(mat, index, i)) {
            special++;
        }
    }
    return special;
};

const checkRow = (mat, i) => {
    let index = -1;

    for (let j = 0; j < mat[0].length; j++) {
        if (mat[i][j] === 1) {
            if (index !== -1) {
                return -1;
            }
            index = j;
        }
    }

    return index;
}

const checkCol = (mat, index, i) => {
    for (let j = 0; j < mat.length; j++) {
        if (j !== i && mat[j][index] === 1) {
            return false;
        }
    }

    return true;
}
