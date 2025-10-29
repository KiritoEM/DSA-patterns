var minCost = function (nums, cost) {
    const isAlreadyEqual = nums.every((el) => el === nums[0]);
    if (isAlreadyEqual || nums.length === 1) return 0;

    let left = Math.min(...nums);
    let right = Math.max(...nums);

    let totalMinCost = Infinity;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        const cost1 = findCostForX(nums, cost, mid);
        const cost2 = findCostForX(nums, cost, mid + 1);

        totalMinCost = Math.min(cost1, cost2);

        if (cost1 < cost2) {
            right = mid;
        }
        else {
            left = mid + 1;
        }
    }

    return totalMinCost;

};

const findCostForX = (nums, cost, x) => {
    let totalCost = 0;

    for (let i = 0; i < nums.length; i++) {
        totalCost += Math.abs(nums[i] - x) * cost[i];
    }

    return totalCost;
}