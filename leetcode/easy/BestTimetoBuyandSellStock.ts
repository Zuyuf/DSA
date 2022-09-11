function maxProfit(prices: number[]): number {
    let buy = prices[0];
    let maxProfit = 0;

    for (let day = 1; day < prices.length; day++) {
      // Checking for lower buy value
      if (prices[day] < buy)
        buy = prices[day];
 
      // Checking for higher profit
      else if (prices[day] - buy > maxProfit) maxProfit = prices[day] - buy;
    }

    return maxProfit;
};


console.time('maxProfit1 time');
const maxProfit1 = maxProfit([7,1,5,3,6,4]);
console.timeEnd('maxProfit1 time');
console.log('maxProfit1 = ', maxProfit1, ' => ', maxProfit1 === 5);

console.time('maxProfit2 time');
const maxProfit2 = maxProfit([7,6,4,3,1]);
console.timeEnd('maxProfit2 time');
console.log('maxProfit2 = ', maxProfit2, ' => ', maxProfit2 === 0);


export default { BestTimetoBuyandSellStock: maxProfit }