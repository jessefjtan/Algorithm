// N皇后
//将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
var solveNQueens = function(n) {
    const res = [];
    backtrack(res, n);
    return res;
};

function backtrack(res, n, lineIndexArr = [], r = 0) {
    if (r === n) {
        res.push(lineIndexArr.map(i => '.'.repeat(i) + 'Q' + '.'.repeat(n - i - 1)));
        return;
    }
    for (let i = 0; i < n; i++) {
        let condition = lineIndexArr.some((lineIndex, index) => {
            return lineIndex === i || lineIndex === i + r - index || lineIndex === i - r + index;
        });
        if (!condition) {
            lineIndexArr.push(i);
            backtrack(res, n, lineIndexArr, r + 1);
            lineIndexArr.pop();
        }
    }
}

console.log(solveNQueens(4));
