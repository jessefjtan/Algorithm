for(let i = 0; i < K; i++) {
    A[A.indexOf(Math.min(...A))] *= -1;
}
return A.reduce((x,y)=>x+y);
