/**
 * 93. 复原IP地址
 * https://leetcode-cn.com/problems/restore-ip-addresses/
 * 给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。
 * 示例:
 * 输入: "25525511135"
 * 输出: ["255.255.11.135", "255.255.111.35"]
 */
export default (str) => {
  // 如果字符串长度大于12，直接返回空
  if (str.length > 12) {
    return []
  }
  // 保存所有符合条件的IP
  let r = []
  let search = (cur, sub) => {
    if (cur.length === 4 && cur.join('') === str) {
      r.push(cur.join('.'))
    } else {
      for (let i = 0, len = Math.min(3, sub.length), tmp; i < len; i++) {
        tmp = sub.substr(0, i + 1)
        if (tmp < 256 && ('' + +tmp) === tmp) {
          search(cur.concat([tmp]), sub.substr(i + 1))
        }
      }
    }
  }
  search([], str)
  return r
}
