//Given a string,
// find the length of the longest substring without repeating characters.
/*function lengthOfLongestSubstring (s) {
    let cache = {};
    let [start, max] = [0,0];
    for(let i = 0; i < s.length; i++) {
        let ch = s[i];
        if( cache[ch] >= start ) {
            start = cache[ch] + 1;
        }

        max = Math.max(max, i-start+1);
        cache[ch] = i;
    }
    return max;
}*/
function lengthOfLongestSubstring (s) {
    let cache = {};
    let start = 0;
    return s.split('').reduce((max, cur, index) => {
        start = start <= cache[cur] ? 1 + cache[cur] : start;
        cache[cur] = index;
        return Math.max(max, cache[cur] - start + 1);
    }, 0);

}

console.log( lengthOfLongestSubstring("abcabcdebb") );
