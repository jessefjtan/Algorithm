var sortArrayByParity = function(A) {
    let a1 = [];
    let a2 = [];
    let i = 0;
    let size = A.length;
    while(i < size) {
        if(A[i]%2) {
            a1.push(A[i]);
        } else {
            a2.push(A[i]);
        }
        console.log(a1);
        console.log(a2);
        i++;
    }
    return a1.concat(a2);
};

sortArrayByParity([1,2,3,4]);
