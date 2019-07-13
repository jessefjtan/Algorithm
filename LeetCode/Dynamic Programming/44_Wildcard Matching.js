var isMatch = function(s, p) {
    if (s == null || p == null) {
        return false;
    }
    let lens = s.length + 1, lenp = p.length + 1;
    // use Array(n) to create array with size n
    // use Array.fill(v) to fill it with values and make it iterable
    // NOTE: if the value passed to Array.fill is a object, it won't get copied
    // but only its reference get copied
    let dp = Array(lens).fill(null).map(c => Array(lenp).fill(false));
    // start the nested for-loop
    for (let i = 0; i < lens; i++) {
        for (let j = 0; j < lenp; j++) {
            if (i === 0 && j === 0) {
                dp[i][j] = true;
                continue;
            }
            if (j === 0) {
                dp[i][j] = false;
                continue;
            }
            // case: if current char of s and p are the same or if current char
            // of p is the '?'
            if (p[j-1] !== '*') {
                if (i > 0 && (s[i-1] === p[j-1] || p[j-1] === '?')) {
                    dp[i][j] = dp[i-1][j-1];
                }
            }
            // case when current char of p is '*'
            else {
                // for case '*' match 0 character of s
                dp[i][j] |= dp[i][j-1];
                // '*' match 1 or n characters
                if (i > 0) {
                    dp[i][j] |= dp[i-1][j];
                }
                dp[i][j] = !!dp[i][j];
            }
        }
    }
    return dp[lens-1][lenp-1];
}
