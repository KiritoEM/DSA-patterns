impl Solution {
    pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
        let mut p = 1; //fast pointer
        let mut q = 1; //slow pointer
        let mut count = 1;

        while p < nums.len() {
            if nums[p] == nums[p -1] {
                count += 1;
            }
            else {
                count = 1;
            }

            if count <= 2 {
                nums[q] = nums[p];
                q += 1;
            }

            p += 1;
        }

        q as i32
    }
}