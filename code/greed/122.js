/**
 * 122. 买卖股票的最佳时机 II
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
  设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
  注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
  示例 1:
  输入: [7,1,5,3,6,4]
  输出: 7
  解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
       随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。
 */
/* 
贪心算法 -- 设计几种策略，在这几种策略中找到你自己认为最优解  因此它需要大量的数据去测试
策略1：从最低点买入，在最高点卖出（最求单次利益）
策略2：从最低点买入，只要可以赚钱就卖出；不断买卖（最求多次利益，单次利益不够）
策略3：从最低点买入，到最高点卖出，不断买卖（在保证到此利益的基础上，实现多次交易）√
*/
export default (prices) => {
  // 保存利润
  let count = 0
  for (let i = 0, len = prices.length; i < len; i++) {
    for (let j = i; j < len - 1; j++) {
      // 上涨 不卖 达到最高点卖 跌的时候再买 多次买卖
      if (prices[j + 1] > prices[j]) {
        count += prices[j + 1] - prices[j]
        i = j
      } else {
        // 买
        i = j
        break
      }
    }
  }
  return count
}