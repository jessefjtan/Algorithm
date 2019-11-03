/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    let buy = -Infinity;
    let sell = 0;
    for(let i = 0; i < prices.length; i++) {
        buy = Math.max(buy, sell - prices[i] - fee);
        sell = Math.max(sell, buy + prices[i]);
    }
    return sell;
};
