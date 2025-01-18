var relativeSortArray = function (arr1, arr2) {
    let arrMap = {};
    let res = [];

    for (let n of arr1) {
        if (arrMap[n]) {
            arrMap[n]++;
        } else {
            arrMap[n] = 1;
        }
    }

    for (let n of arr2) {
        while (arrMap[n] > 0) {
            res.push(n);
            arrMap[n]--;
        }
    }

    let rest = [];
    for (let key in arrMap) {
        for (let j = 0; j < arrMap[key]; j++) {
            rest.push(parseInt(key));
        }
    }

    rest.sort((a, b) => a - b);

    return res.concat(rest);
};
