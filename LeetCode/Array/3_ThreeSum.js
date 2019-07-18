/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=>a-b);
    let res = [];
    for(let i = 0, len = nums.length; i < len; i++) {
        if(nums[i] > 0) {return res;}
        if(i && nums[i] === nums[i-1]) {continue;}
        let target = -nums[i];
        let j = i + 1;
        let k = len - 1;
        while(j < k) {
            if(target === nums[j] + nums[k]) {
                res.push([nums[i], nums[j++], nums[k--]]);
                while(nums[j] === nums[j-1]) {
                    j++;
                }
                while(nums[k] === nums[k+1]) {
                    k--;
                }
            } else if(target > nums[j] + nums[k]) {
                j++;
            } else {
                k--;
            }
        }
    }
    return res;
};
