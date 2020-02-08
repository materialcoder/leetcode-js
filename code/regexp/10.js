/**
 * 10. 正则表达式匹配
 * https://leetcode-cn.com/problems/regular-expression-matching/
 */

/**
 * s 字符串
 * p 模式
 */
export default (s, p) => {
  let isMatch = (s, p) => {
    // 便捷条件，如果s和p都为空，说明处理结束了，返回true，否则返回false
    if (!p.length) {
      return !s.length
    }
    // 判断p模式字符串的第一个字符和s字符串的第一个字符是不是匹配
    let match = false
    if (s.length && (p[0] === s[0] || p[0] === '.')) {
      match = true
    }
    // 有模式
    if (p.length > 1 && p[1] === '*') {
      // 第一种情况，让s*匹配0个字符
      // 第二种情况，s*匹配一个字符，递归下去，用来表示s*匹配多个s
      return isMatch(s, p.slice(2)) || (match && isMatch(s.slice(1), p))
    } else {
      // 如果第一步匹配上了，则去掉s和p的第一位，继续匹配
      return match && isMatch(s.slice(1), p.slice(1))
    }
  }
  return isMatch(s, p)
}
