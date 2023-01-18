// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.


// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    //edge case of array length less than 2
  if(prices.length < 2) return 0;
  
  //initialize maxProfit at 0
  let maxProfit = 0
  
  //iterate through the array for day we buy the stock
  for(let i = 0; i < prices.length - 1; i++){
    //iterate through the array for the day we sell the stock
    for(let j = i+1; j < prices.length; j++){
      //calculate our current profit
      let currProfit = prices[j] - prices[i]
      maxProfit = Math.max(currProfit, maxProfit)
    }
  }
  return maxProfit
};

const maxProfit2 = (prices) => {
	//set up two variables to have a "buy" and a profit initializer
  let buy = prices[0]; 
  let profit = 0; 
  
  for (let price of prices) {
		if (price < buy) {
			buy = price
    }
    
    profit = Math.max(price - buy, profit)
  }
  
  return profit 
}









