/**
 * 30. 串联所有单词的子串
 * https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/
 * 给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。
 * 注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。
 * 示例 1：
 * 输入：
 * s = "barfoothefoobarman",
 * words = ["foo","bar"]
 * 输出：[0,9]
 * 解释：
 * 从索引 0 和 9 开始的子串分别是 "barfoo" 和 "foobar" 。
 * 输出的顺序不重要, [9,0] 也是有效答案。
 * 示例 2：
 * 输入：
 * s = "wordgoodgoodgoodbestword",
 * words = ["word","good","best","word"]
 * 输出：[]
 */

let method1 = (str, words) => {
  // 保存结果
  let result = []
  // 记录数组的长度，做边界条件计算
  let num = words.length
  // 递归函数体 r 上一步处理的结果 arr 未处理的子串
  let range = (r, arr) => {
    if (r.length === num) {
      result.push(r)
    } else {
      arr.forEach((item, idx) => {
        let tmp = [].concat(arr)
        tmp.splice(idx, 1)
        range(r.concat(item), tmp)
      })
    }
  }
  // 找到所有的子串
  range([], words)
  return result.map(item => {
    return str.indexOf(item.join(''))
  }).filter(item => item > -1).sort()
}

// 解决方法一会漏掉部分匹配位置，以及边界条件
let method2 = (str, words) => {
  if (!str || !words.length) return []
  // 保存结果
  let result = []
  // 记录数组的长度，做边界条件计算
  let num = words.length
  // 递归函数体 r 上一步处理的结果 arr 未处理的子串
  let range = (r, arr) => {
    if (r.length === num) {
      result.push(r)
    } else {
      arr.forEach((item, idx) => {
        let tmp = [].concat(arr)
        tmp.splice(idx, 1)
        range(r.concat(item), tmp)
      })
    }
  }
  range([], words)
  let res = []
  // 找到所有满足条件的位置
  result.map(item => {
    let r = item.join('')
    let s = str
    for (let i = 0; i < str.length; i++) {
      let index = s.indexOf(r)
      if (index > -1) {
        let l = res.length
        res.push(i > 0 ? index + 1 + res[l - 1] : index)
        s = s.slice(index + 1)
      }
    }
  })
  // 去重并排序
  return Array.from(new Set(res)).sort()
}

// 优化查找index部分 但是在leetCode上提交还是会超时
let method3 = (str, words) => {
  if (!str || !words.length) return []
  // 保存结果
  let result = []
  // 记录数组的长度，做边界条件计算
  let num = words.length
  // 递归函数体 r 上一步处理的结果 arr 未处理的子串
  let range = (r, arr) => {
    if (r.length === num) {
      result.push(r)
    } else {
      arr.forEach((item, idx) => {
        let tmp = [].concat(arr)
        tmp.splice(idx, 1)
        range(r.concat(item), tmp)
      })
    }
  }
  // 查找起始位置
  let findIndexs = (s, p) => {
    let positions = []
    let index = s.indexOf(p)
    while (index > -1) {
      positions.push(index)
      index = s.indexOf(p, index + 1)
    }
    return positions
  }
  range([], words)
  let res = []
  // 找到所有满足条件的位置
  result.map(item => {
    let r = item.join('')
    res = res.concat(findIndexs(str, r))
  })
  // 去重并排序 排序只是为了方便自己测试
  return [...new Set(res)].sort()
}

export default method3
