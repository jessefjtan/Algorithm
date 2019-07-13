//给定一个没有重复数字的序列，返回其所有可能的全排列。
var permute = function(nums) {
    const res = [];
    backtrack(nums, res);
    return res;
};

function backtrack(nums, res, n = 0) {
    if (n === nums.length - 1) {
        res.push(nums.slice(0));
        return;
    }
    for (let i = n; i < nums.length; i++) {
        [nums[i], nums[n]] = [nums[n], nums[i]];
        backtrack(nums, res, n + 1);
        [nums[i], nums[n]] = [nums[n], nums[i]];
    }
}

console.log(permute([1,2,3]))
