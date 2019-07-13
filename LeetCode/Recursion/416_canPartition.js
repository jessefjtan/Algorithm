/**
 * 给定一个只包含正整数的非空数组。是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
 * 输入: [1, 5, 11, 5]
   输出: true
   解释: 数组可以分割成 [1, 5, 5] 和 [11].
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    if(sum % 2 !== 0) return false;
    let targetCount = sum / 2;
    let dp = new Array(targetCount + 1).fill(false);
    dp[0] = true;

    for(let num of nums) {
        for(let i = targetCount; i >= num; i--){
            dp[i] = dp[i] || dp[i - num];
        }
    }
    return dp[targetCount];
};
