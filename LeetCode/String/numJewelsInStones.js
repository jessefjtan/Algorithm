/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    const jewels = new Set(J);
    return S.split('').reduce((res, s) => res + jewels.has(s), 0)
    // return [...S].filter((char) => J.indexOf(char) > -1 ).length;
};

console.log(numJewelsInStones("Jk", "asaJkkJkTa"));
