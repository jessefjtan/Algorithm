/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    let sorted = deck.sort((a,b)=> b-a);
    let res = [sorted[0]];
    let i = 1;
    while(i < sorted.length) {
        res.unshift(sorted[i++], res.pop());
    }
    return res;
};
