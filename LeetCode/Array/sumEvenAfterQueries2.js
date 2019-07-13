var sumEvenAfterQueries = function(A, queries) {
    let sumEven = 0,
        ans = [];
    // get the sum of evens in A
    A.forEach((value, index) => {
        if(value % 2 == 0)
            sumEven += value;
    });

    queries.forEach((value, index) => {
        console.log(sumEven);
        let val = value[0],
            i = value[1];
        if(A[i] % 2 == 0) {
            Math.abs(val) % 2 == 0 ? ans.push(sumEven += val) : ans.push(sumEven -= A[i]);

        } else {
            Math.abs(val) % 2 == 1 ? ans.push(sumEven += (A[i] + val)) : ans.push(sumEven)
        }
        A[i] += val;
    });

    return ans;

};

console.log( sumEvenAfterQueries([1,2,3,4],[[1,0],[-3,1],[-4,0],[2,3]]) );

