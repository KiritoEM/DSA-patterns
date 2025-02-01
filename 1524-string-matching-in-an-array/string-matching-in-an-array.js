const constructLPS = (pattern) => {
    let len = 0, i = 1;
    let lps = [0];

    while (i < pattern.length) {
        if (pattern[i] === pattern[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len !== 0) {
                len = lps[len - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }

    return lps;
}

const kmpSearch = (pattern, word) => {
    let lps = constructLPS(pattern);
    let i = 0, j = 0;

    while (i < word.length) {
        if (word[i] === pattern[j]) {
            i++;
            j++;

            if (j === pattern.length) {
                return true;
            }
        } else {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }

    return false;
}

/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
    let ans = [];
    let seen = new Set();

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (i !== j && !seen.has(words[j])) {
                if (words[i].length > words[j].length && kmpSearch(words[j], words[i])) {
                    ans.push(words[j]);
                    seen.add(words[j]);
                }
            }
        }
    }

    return ans;
};
