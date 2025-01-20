/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function (word) {
    let newWord = "";

    for (let char of word) {
        if (isNaN(char)) {
            newWord += " ";
        } else {
            newWord += char;
        }
    }

    let wordSet = new Set(newWord.split(" ").filter(item => item !== "").map(BigInt));

    return wordSet.size;
};