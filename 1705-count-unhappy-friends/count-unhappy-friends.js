/**
 * @param {number} n
 * @param {number[][]} preferences
 * @param {number[][]} pairs
 * @return {number}
 */
var unhappyFriends = function (n, preferences, pairs) {
    let happyMap = [];

    for (let [i, j] of pairs) {
        happyMap[i] = preferences[i].indexOf(j);
        happyMap[j] = preferences[j].indexOf(i);
    }

    let res = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < happyMap[i]; j++) {
            let pref = preferences[i][j];

            if (preferences[pref].indexOf(i) < happyMap[pref]) {
                res++;
                break;
            }
        }
    }
    return res;

};