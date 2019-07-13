// 给两个整数数组 A 和 B ，返回两个数组中公共的、长度最长的子数组的长度。
// 输入:
//     A: [1,2,3,2,1]
//     B: [3,2,1,4,7]
//     输出: 3
//     长度最长的公共子数组是 [3, 2, 1]。

var findLength = function(A, B) {
    const rows = A.length;
    const cols = B.length;

    const dp = Array(rows + 1).fill().map(() => Array(cols).fill(0));
    let max = 0;

    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {
            if (A[i - 1] === B[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                max = Math.max(max, dp[i][j]);
            }
        }
    }

    return max;

};
