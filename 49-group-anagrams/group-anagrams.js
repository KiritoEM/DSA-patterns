/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let anagramMap = new Map();

    for (let str of strs) {
        let key = str.split("").sort().join("");

        if (!anagramMap.has(key)) {
            anagramMap.set(key, []);
        }

        anagramMap.get(key).push(str);
    }

    return Array.from(anagramMap.values());
};
