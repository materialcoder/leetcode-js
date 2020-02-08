/**
 * 89. 格雷编码
 * https://leetcode-cn.com/problems/gray-code/
 */
/**
 * n=1
 * 0
 * 1
 */
/**
 * n=2
 * 00
 * 01
 * 11
 * 10
 */
/**
 * n=3
 * 000
 * 001
 * 011
 * 010
 * 110
 * 111
 * 101
 * 100
 */
// 镜像发射法 如上，每一步都等于前一步结果前面加0，以及镜像反射后加1得来
export default (n) => {
  if (n === 0) return [0]
  let make = (n) => {
    if (n === 1) {
      return ['0', '1']
    } else {
      let prev = make(n - 1)
      let result = []
      // 数组的最大下标
      let max = Math.pow(2, n) - 1
      for (let i = 0, len = prev.length; i < len; i++) {
        result[i] = `0${prev[i]}`
        result[max - i] = `1${prev[i]}`
      }
      return result
    }
  }
  let result = make(n).map(item => parseInt(item, 2))
  return result
}
