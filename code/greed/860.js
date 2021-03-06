/**
 * 860. 柠檬水找零
 * https://leetcode-cn.com/problems/lemonade-change/
 * 在柠檬水摊上，每一杯柠檬水的售价为 5 美元。
  顾客排队购买你的产品，（按账单 bills 支付的顺序）一次购买一杯。
  每位顾客只买一杯柠檬水，然后向你付 5 美元、10 美元或 20 美元。你必须给每个顾客正确找零，也就是说净交易是每位顾客向你支付 5 美元。
  注意，一开始你手头没有任何零钱。
  如果你能给每位顾客正确找零，返回 true ，否则返回 false 。
  示例 1：
    输入：[5,5,5,10,20]
    输出：true
  解释：
    前 3 位顾客那里，我们按顺序收取 3 张 5 美元的钞票。
    第 4 位顾客那里，我们收取一张 10 美元的钞票，并返还 5 美元。
    第 5 位顾客那里，我们找还一张 10 美元的钞票和一张 5 美元的钞票。
    由于所有客户都得到了正确的找零，所以我们输出 true。
  示例 2：
    输入：[5,5,10]
    输出：true
  示例 3：
    输入：[10,10]
    输出：false
 */
export default (input) => {
  // 表示自己的钱箱（用于存储零钱）
  let hand = []
  // 是否有顾客还在
  while (input.length) {
    // 取出当前排在最前面顾客的钱
    let money = input.shift()
    if (money === 5) {
      hand.push(money)
    } else {
      // 手里的零钱降序排列，优先找面值大的
      hand.sort((a, b) => b - a)
      // 顾客的钱减去饮料的钱就是需要找零的钱
      let change = money - 5
      for (let i = 0, len = hand.length; i < len; i++) {
        if (hand[i] <= change) {
          change -= hand[i]
          hand.splice(i, 1)
          // 删除之后数组长度改变了，要维持刚才的i不变
          i--
        }
        if (change === 0) {
          break
        }
      }
      // 没有零钱找给顾客
      if (change !== 0) {
        return false
      } else {
        // 顾客的钱要收起来
        hand.push(money)
      }
    }
  }
  return true
}

export default method2 = (bills) => {
  let ten = 0
  let five = 0
  let bill
  for (let i = 0, len = bills.length; i < len; i++) {
    bill = bills[i]
    if (bill === 5) {
      five++
    } else if (bill === 10) {
      if (five === 0) return false
      five--
      ten++
    } else {
      if (ten > 0 && five > 0) {
        ten--
        five--
      } else if (five >= 3) {
        five -= 3
      } else {
        return false
      }
    }
  }
  return true
}