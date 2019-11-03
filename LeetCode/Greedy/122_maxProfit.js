/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let sum = 0;
    for(let i = 0; i < prices.length; i++) {
        let profit = prices[i] - prices[i-1];
        sum += (profit > 0 ? profit : 0);
    }
    return sum;
};
