/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let current = 0;
    let finalInteger = "";

    //replaces spaces and skipping 
    s = s.trim();

    const regex = /\s/g;

    while (current < s.length) {
        //checking sign
        if ((s[current] === "-" || s[current] === "+") && finalInteger.length === 0) {
            const nextChar = s[current + 1];

            if (s[current + 1] === "+" || s[current + 1] === "-") {
                return 0;
            }

            finalInteger += s[current];
            current++;
            continue;
        }

        //skip zeros
        while (s[current] === "0") {
            current++;
        }

        //add number into finalDigit
        if (isDigit(s[current])) {
            if (current >= s.length) {
                return;
            }

            while (isDigit(s[current])) {
                finalInteger += s[current];
                current++;
            }

            break;
        }

        break;
    }

    if (finalInteger.length === 0 || finalInteger === "+" || finalInteger === "-") {
        return 0;
    }

    let roundedInteger = parseInt(finalInteger, 10);


    if (roundedInteger < (-(2 ** 31))) {
        roundedInteger = -(2 ** 31);
    }
    else if (roundedInteger > ((2 ** 31) - 1)) {
        roundedInteger = (2 ** 31) - 1;
    }

    return roundedInteger;
};

const isDigit = (n) => {
    return n >= "0" && n <= "9";
}

