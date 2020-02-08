/**
 * 459. 重复的子字符串
 * https://leetcode-cn.com/problems/repeated-substring-pattern/
 * 给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，并且长度不超过10000。
 * 示例 1:
 * 输入: "abab"
 * 输出: True
 * 解释: 可由子字符串 "ab" 重复两次构成。
 *
 * 示例 2:
 * 输入: "aba"
 * 输出: False
 */

// 正则
let method1 = (str) => {
  var reg = /^(\w+)\1+$/
  return reg.test(str)
}

// 将原始字符串重复一遍，然后错一位，如果字符串有重复子串，那错位后的
// 字符串一定会包含原始的字符串
let method2 = (str) => {
  return (str + str).substring(1, str.length * 2 - 1).indexOf(str) !== -1
}

// repeat 从头寻找子串，判断是否符合条件
let method3 = (str) => {
  for (let i = 0, len = str.length; i < len; i++) {
    let sub = str.slice(0, i + 1)
    let count = str.length / sub.length
    if (Number.isInteger(count) && sub.repeat(count) === str && count > 1) {
      return true
    }
  }
  return false
}

export default method3
