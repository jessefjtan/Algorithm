function letterCombinations(digits) {
    var map = ['0', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    var res = [];
    var prefix = [];

    if (digits.length) {
        traverse(0);
    }
    return res;

    function traverse(idx) {
        if (idx === digits.length) {
            return res.push(prefix.join(''));
        }

        var str = map[digits[idx] - '0'];

        for (var i = 0; i < str.length; i++) {
            prefix.push(str[i]);
            traverse(idx + 1);
            prefix.pop();
        }
    }
}

console.log( letterCombinations("23") );
