var intersect = function(nums1, nums2) {
    let map = new Map();
    let res = [];
    //记录nums中每个元素出现的次数
    for(let i = 0; i < nums1.length; i++) {
        if(map.has(nums1[i])) {
            map.set(nums1[i], map.get(nums1[i]) + 1);
        } else {
            map.set(nums1[i], 1);
        }
    }
    //遍历nums2，遇到nums1中相同元素则map中对应次数减1，如果只出现过1次则直接删除
    for(let i = 0; i < nums2.length; i++) {
        let temp = nums2[i];
        let hashKey = map.get(temp);
        if(map.has(temp)) {
            res.push(temp);
            if(hashKey > 1) {
                map.set(temp, hashKey - 1);
            } else {
                map.delete(temp);
            }
        }
    }

    return res
};
//先排序后比较
var intersect2 = function(nums1, nums2) {
    let p1 = 0;
    let p2 = 0;
    let res = [];
    nums1 = nums1.sort((a, b) => a - b);
    nums2 = nums2.sort((a, b) => a - b);
    while(p1 < nums1.length && p2 < nums2.length) {
        if(nums1[p1] === nums2[p2]) {
            res.push(nums1[p1]);
            p1++;
            p2++;
        } else if(nums1[p1] < nums2[p2]) {
            p1++;
        } else {
            p2++;
        }
    }
    return res
};