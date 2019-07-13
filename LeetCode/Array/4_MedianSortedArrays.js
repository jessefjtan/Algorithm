/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1]
    }
    const arr1Length = nums1.length, arr2Length = nums2.length;
    let iMin = 0, iMax = arr1Length;
    const halfLen = Math.floor((arr1Length + arr2Length + 1) / 2);
    while (iMin <= iMax) {
        let i = Math.floor((iMin + iMax) / 2);   //二分查找
        let j = halfLen - i;
        if (i < iMax && nums2[j - 1] > nums1[i]) {
            iMin = i + 1;
        } else if (i > iMin && nums1[i - 1] > nums2[j]) {
            iMax = i - 1;
        } else {
            let maxLeft = 0;
            if (i === 0) {
                maxLeft = nums2[j - 1]
            } else if (j === 0) {
                maxLeft = nums1[i - 1]
            } else {
                maxLeft = Math.max(nums1[i - 1], nums2[j - 1]);
            }
            if ((arr1Length + arr2Length) % 2 === 1) {
                return maxLeft;
            }

            let minRight = 0;
            if (i === arr1Length) {
                minRight = nums2[j];
            } else if (j === arr2Length) {
                minRight = nums1[i];
            } else {
                minRight = Math.min(nums2[j], nums1[i]);
            }
            return (maxLeft + minRight) / 2;
        }
    }
    return 0;
};
