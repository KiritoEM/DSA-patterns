impl Solution {
    pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
        let mut p = 1;
        let mut q = 1;

        while p < nums.len() {
            if nums[p] != nums[p - 1] { //if find new element
                nums[q] = nums[p];
                q += 1;
            }

            p += 1;
        }

        q as i32
    }
}