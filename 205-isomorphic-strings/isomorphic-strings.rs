use std::collections::{HashMap, HashSet};

impl Solution {
    pub fn is_isomorphic(s: String, t: String) -> bool {
        let mut dict = HashMap::new();
        let s_chars : Vec<char> = s.chars().collect();
        let t_chars : Vec<char> = t.chars().collect();
        let mut set = HashSet::new();

        for i in 0..s_chars.len() {
            if let Some(&mapped_t) = dict.get(&s_chars[i]) {
                if mapped_t != t_chars[i] {
                    return false;
                }
            }
            else {
                if set.contains(&t_chars[i]) {
                    return false;
                }

                dict.insert(s_chars[i], t_chars[i]);
                set.insert(t_chars[i]);
            }
        }

        println!("{:?}", dict);

        true
    }
}