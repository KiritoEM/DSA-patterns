impl Solution {
    pub fn max_area(height: Vec<i32>) -> i32 {
        let mut p = 0;
        let mut q = height.len() - 1;
        let mut max_area: i32 = 0;

        while p < q {
            let h = height[p].min(height[q]);
            max_area = max_area.max(h * (q -p) as i32);

            if (height[p] < height[q]) {
                p += 1;
            }
            else {
                q -= 1;
            }
        }

        max_area
    }
}