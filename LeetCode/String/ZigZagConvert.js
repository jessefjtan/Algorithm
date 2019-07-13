/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

/*n=numRows
Δ=2n-2    1                           2n-1                         4n-3
Δ=        2                     2n-2  2n                    4n-4   4n-2
Δ=        3               2n-3        2n+1              4n-5       .
Δ=        .           .               .               .            .
Δ=        .       n+2                 .           3n               .
Δ=        n-1 n+1                     3n-3    3n-1                 5n-5
Δ=2n-2    n                           3n-2                         5n-4
*/

var convert = function(s, numRows) {
    if(!s) {return "";}
    if(!numRows || 2 > numRows) {return s;}
    let res = "";
    let size = 2 * numRows - 2;
    let pos = 0;
    for(let i = 0; i < numRows; i++) {
        for(let j = i; j < s.length; j+= size) {
            res += s[j];
            pos = j + size - 2 * i;
            if(0 < i && numRows - 1 > i && pos < s.length) {
                res += s[pos];
            }
        }
    }

    return res;
};

console.log( convert("PAHNAPLSIIGYIR", 4) );
