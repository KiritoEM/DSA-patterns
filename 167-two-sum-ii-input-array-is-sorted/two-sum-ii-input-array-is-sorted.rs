impl Solution {
    pub fn two_sum(numbers: Vec<i32>, target: i32) -> Vec<i32> {
        let mut p = 0;
        let mut q = numbers.len() - 1;
        let mut indices: Vec<i32> = Vec::new();

        while p < q {
            let curr_target = numbers[p] + numbers[q];
            if curr_target > target {
                q -= 1;
            } else if curr_target < target {
                p += 1;
            } else {
                indices.push((p + 1) as i32);
                indices.push((q + 1) as i32);
                break;
            }
        }

        indices
    }
}
