/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    var len =  points.length, l = 0, r = len - 1, mid = 0;
    while (l <= r) {
        mid = helper(points, l, r);
        if (mid === K) break;
        if (mid < K) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return points.slice(0, K);
};

function helper(A, l ,r) {
    var pivot = A[l];
    while (l < r) {
        while (l < r && compare(A[r], pivot) >= 0) r--;
        A[l] = A[r];
        while (l < r && compare(A[l], pivot) <= 0) l++;
        A[r] = A[l];
    }
    A[l] = pivot;
    return l;
}

function compare(p1, p2) {
    return p1[0] * p1[0] + p1[1] * p1[1] - p2[0] * p2[0] - p2[1] * p2[1];
}

var points = [[3,3],[5,-1],[-2,4]];
console.log(kClosest(points, 2));