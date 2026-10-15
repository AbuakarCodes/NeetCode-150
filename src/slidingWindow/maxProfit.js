function maxProfit(prices) {
  let profits = []
  let maxProfit = 0
  for (let i = 0; i < prices.length - 1; i++) {
    let maxPriseAfterBuy = Math.max(...prices.slice(i + 1))
    let profit = maxPriseAfterBuy - prices[i]
    profits.push(profit)
  }

  maxProfit = Math.max(...profits)
  return maxProfit > 0 ? maxProfit : 0
}

let prices = [10, 8, 7, 5, 2]
prices = [10, 1, 5, 6, 7, 1]

console.log(maxProfit(prices))
