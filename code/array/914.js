/**
 * 914. 卡牌分组
 * https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/
 */

// 计算两个数a, b的最大公约数
// 可以写成 a = c * b + d 如果d等于0，最大公约数就为b
// 否则b可以继续写成 b = e* d + f 如果 f 等于0，则a,b的最大公约数为b
// 以此类推 d = ... ,就可以得到a,b的最大公约数
// export default function gcd (a, b) {
//   if (b === 0) {
//     return a
//   } else {
//     return gcd(b, a % b)
//   }
// }

// export default (arr) => {
//   // 卡牌排序，排序的目的是让相同的牌排在一起，方便分组
//   let str = arr.sort().join('')
//   // 分组(单张或多张)
//   let group = str.match(/(\d)\1+|\d/g)
//   // 求两个数的最大公约数
//   let gcd = (a, b) => {
//     if (b === 0) {
//       return a
//     } else {
//       return gcd(b, a % b)
//     }
//   }
//   while (group.length > 1) {
//     let a = group.shift().length
//     let b = group.shift().length
//     let v = gcd(a, b)
//     if (v === 1) {
//       return false
//     } else {
//       // 插入一个长度为v的字符串
//       group.unshift('0'.repeat(v))
//     }
//   }
//   return group.length ? group[0].length > 1 : false
// }

export default (arr) => {
  let group = []
  let tmp = {}
  // 不需要排序，直接统计每个数字出现的次数
  arr.forEach(item => {
    tmp[item] = tmp[item] ? tmp[item] + 1 : 1
  })
  for (let v of Object.values(tmp)) {
    group.push(v)
  }
  // 求两个数的最大公约数
  let gcd = (a, b) => {
    if (b === 0) {
      return a
    } else {
      return gcd(b, a % b)
    }
  }
  while (group.length > 1) {
    let a = group.shift()
    let b = group.shift()
    let v = gcd(a, b)
    if (v === 1) {
      return false
    } else {
      // 插入一个长度为v的字符串
      group.unshift(v)
    }
  }
  return group.length ? group[0] > 1 : false
}
