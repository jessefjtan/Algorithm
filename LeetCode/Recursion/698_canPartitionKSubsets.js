/**
 * 给定一个整数数组  nums 和一个正整数 k，
 * 找出是否有可能把这个数组分成 k 个非空子集，其总和都相等。
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const canPartitionKSubsets = (nums, k) => {
    const sum = nums.reduce((total, num) => total + num);
    if (sum % k !== 0 || nums.some(num => num > sum / k)) {
        return false;
    }
    const used = new Set();
    return (function search(start, target) {
        if (used.size === nums.length) {
            return true;
        }
        if (target < 0) {
            return false;
        }
        if (target === 0) {
            return search(0, sum / k);
        }
        for (let i = start; i < nums.length; i++) {
            if (!used.has(i)) {
                used.add(i);
                if (search(i + 1, target - nums[i])) {
                    return true;
                }
                used.delete(i);
            }
        }

        return false;
    })(0, sum / k);
};

console.log(canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4));
