class CustomPriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(node, priority) {
        let flag = false;

        for (let i = 0; i < this.values.length; i++) {
            if (this.values[i].priority < priority) {
                this.values.splice(i, 0, { node, priority });
                flag = true;
                break;
            }
        }

        if (!flag) {
            this.values.push({ node, priority });
        }
    }

    dequeue() {
        return this.values.shift();
    }

    size() {
        return this.values.length;
    }

    isEmpty() {
        return this.values.length === 0;
    }
}

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {
    let pq = new CustomPriorityQueue();
    let result = [];

    if (a > 0) pq.enqueue({ char: 'a', count: a }, a);
    if (b > 0) pq.enqueue({ char: 'b', count: b }, b);
    if (c > 0) pq.enqueue({ char: 'c', count: c }, c);

    while (!pq.isEmpty()) {
        let { char, count } = pq.dequeue().node;

        if (result.length >= 2 && result[result.length - 1] === char && result[result.length - 2] === char) {
            if (!pq.isEmpty()) {
                let { char: tempChar, count: tempCount } = pq.dequeue().node;
                result.push(tempChar);

                if (tempCount - 1 > 0) {
                    pq.enqueue({ char: tempChar, count: tempCount - 1 }, tempCount - 1);
                }

                pq.enqueue({ char: char, count: count }, count);
            }
        } else {
            result.push(char);
            count--;

            if (count > 0) {
                pq.enqueue({ char: char, count: count }, count);
            }
        }
    }

    return result.join('');
};
