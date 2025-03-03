use std::collections::{HashMap, HashSet};

impl Solution {
    pub fn word_pattern(pattern: String, s: String) -> bool {
        let pattern_chars: Vec<char> = pattern.chars().collect();
        let words: Vec<&str> = s.split_whitespace().collect();
        let mut set = HashSet::new();
        let mut dict = HashMap::new();

        if pattern_chars.len() != words.len() {
            return false;
        }

        for i in 0..pattern_chars.len() {
            let pattern = pattern_chars[i];
            let word = words[i];

            if let Some(&mapped_pattern) = dict.get(word) {
                if mapped_pattern != pattern {
                    return false; 
                }
            } else {
                if set.contains(&pattern) {
                    return false;
                }
                dict.insert(word, pattern);
                set.insert(pattern);
            }
        }

        true
    }
}
