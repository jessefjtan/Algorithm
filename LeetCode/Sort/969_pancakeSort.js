var pancakeSort = function(A) {
    let length = A.length;
    let result = [];
    let pos = -1;
    for(let i=length; i>0; i--) {
        pos = A.indexOf(i) + 1;
        A = A.slice(pos, i).reverse().concat(A.slice(0, pos - 1));
        result.push(pos, i);
    }
    return result;
};