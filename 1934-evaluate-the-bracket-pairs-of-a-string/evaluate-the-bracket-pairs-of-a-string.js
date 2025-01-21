/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function (s, knowledge) {
    let kn_map = {};
    let res = "";

    for (let i = 0; i < knowledge.length; i++) {
        kn_map[knowledge[i][0]] = knowledge[i][1];
    }

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            let key = "";
            i++;

            while (s[i] !== ")") {
                key += s[i];
                i++;
            }

            if (kn_map[key]) {
                res += kn_map[key];
            }
            else {
                res += "?";
            }
        }
        else {
            res += s[i];
        }
    }

    return res;
};