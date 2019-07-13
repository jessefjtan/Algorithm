/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function(nums, target) {
    for(var i = 0, iLen = nums.length; i < iLen; i++) {
        for(var j = i + 1; j < iLen; j++) {
            if(target === nums[i] + nums[j]) {
                return [i, j];
            }
        }
    }
};

var twoSum2 = function(nums, target) {
    let cache = {}; //more space for less time
    for(let i = 0, iLen = nums.length; i < iLen; i++) {
        let curNum = nums[i];
        let dNum = target - curNum;
        if(cache[dNum] > -1) {
            return [cache[dNum], i];
        }
        cache[curNum] = i;
    }
};
