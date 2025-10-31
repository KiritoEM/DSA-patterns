/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let res = [];
    let left = 0, right = 0;

    const dfs = (left, right, curr) => {
        //if curr.length === n * 2 then break recursive
        if (curr.length === n * 2) {
            res.push(curr);
            return;
        }

        //explore left bracket option
        if (left < n) {
            dfs(left + 1, right, curr + "(");
        }

        //expore right bracket option
        if (right < left) {
            dfs(left, right + 1, curr + ")");
        }
    }

    dfs(left, right, "");

    return res;
};
