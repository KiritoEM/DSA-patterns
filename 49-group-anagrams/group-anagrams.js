/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let group = new Object();

    for (let i = 0; i < strs.length; i++) {
        let str = strs[i].split("").sort().join("");

        if (!group[str]) {
            group[str] = [];
            group[str].push(strs[i]);
            continue;
        }

        group[str].push(strs[i]);
        group[str].sort();
    }

    return Object.values(group);
};