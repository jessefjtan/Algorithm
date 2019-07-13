var sumEvenAfterQueries = function(A, queries) {
    let res = [];
    queries.reduce((prev, cur) => {
        A[cur[1]] += cur[0];
        let even = A.filter(x=>!(x%2));
        res.push(even.reduce((x,y)=>x+y, 0));
        return A;
    }, A);
    return res;
};

console.log( sumEvenAfterQueries([1,2,3,4],[[1,0],[-3,1],[-4,0],[2,3]]) );
