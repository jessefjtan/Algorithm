var mySqrt = function(x) {
    if(2 > x){return x;}
    let left = 0;
    let right = x;
    while(left < right) {
        let mid = 1 + parseInt(left + (right+left)/2);
        if(mid*mid === x) {
            return mid;
        } else if(mid*mid > x) {
            if((mid-1)*(mid-1) <= x) {
                return mid-1;
            }
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left - 1;
};

console.log( mySqrt(15) );
