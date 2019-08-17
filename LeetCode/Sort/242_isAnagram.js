/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) {
        return false;
    }
    let a = Array.from(s).sort();
    let b = Array.from(t).sort();
    return a.join('') === b.join('');
};
var isAnagram2 = function(s, t) {
    if(s.length !== t.length) {
        return false;
    }
    let cache = new Array(26).fill(0);
    for(let i = 0, len = s.length; i < len; i++) {
        cache[s.charCodeAt(i) - 97]++;
    }
    for(let i = 0, len2 = t.length; i < len2; i++) {
        cache[t.charCodeAt(i) - 97]--;
        if(cache[t.charCodeAt(i) - 97] < 0) {
            return false;
        }
    }
    return true;
};
