/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
    let sum = nums.reduce((x,y)=>x+y,0);
    if(sum%k)return false;
    let visited = new Array(nums.length).fill(0);
    return canPartition(nums, k, visited, sum/k, 0, 0, 0);
};

function canPartition(nums, k, visited, target, start_index, cur_sum, cur_num) {
    if( 1 === k ) {
        return true;
    }
    if(cur_sum === target && cur_num > 0 ){
        return canPartition(nums, k-1, visited, target, 0, 0, 0);
    }
    for(let i = start_index; i < nums.length; i++){
        if(visited[i] === 0){
            visited[i] = 1;
            if(canPartition(nums, k, visited, target, i+1, cur_sum + nums[i], cur_num++)) {
                return true;
            }
            visited[i] = 0;
        }
    }
    return false;
}

console.log(canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4));
