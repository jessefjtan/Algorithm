/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    // let pm = points.map((p, index) => {
    //     return {
    //         i : index,
    //         v: p[0]*p[0] + p[1]*p[1]
    //     };
    // });
    // let a = pm.sort((x,y) => x.v - y.v).slice(0, K).map(x => x.i);
    // let res = [];
    // for(let i = 0, len = a.length; i < len; i++) {
    //     res.push(points[a[i]]);
    // }
    // return res;
    return points.sort((a,b) => {
        return a[0]*a[0] + a[1]*a[1] - b[0]*b[0] - b[1]*b[1];
    }).slice(0, K);
};

var points = [[3,3],[5,-1],[-2,4]];
console.log(kClosest(points, 2));
