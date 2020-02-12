/**
 * 54. 螺旋矩阵
 * https://leetcode-cn.com/problems/spiral-matrix/
 * 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。
 * 示例 1:
 * 输入:
   [
     [ 1, 2, 3 ],
     [ 4, 5, 6 ],
     [ 7, 8, 9 ]
   ]
   输出: [1,2,3,6,9,8,7,4,5]
 */
export default (arr) => {
  // 处理每一圈的数据遍历过程
  let map = (arr, r = []) => {
    // r = r.concat(arr.shift())
    for (let i = 0, len = arr.length; i < len; i++) {
      // 如果已经被取空了，直接跳出循环
      if (arr[i][0] === undefined) {
        break
      }
      if (i === 0) {
        // 第一行直接取第一整行
        r = r.concat(arr[i])
      } else if (i === len - 1) {
        // 最后一行取最后一整行的反转
        r = r.concat(arr[i].reverse())
      } else {
        // 每一行的最后一个数
        r.push(arr[i].pop())
      }
    }
    // 删除arr的第一行和最后一行
    arr.shift()
    arr.pop()
    // 每一行的第一个元素
    for (let i = arr.length - 1; i > 0; i--) {
      if (arr[i][0] === undefined) {
        break
      }
      r.push(arr[i].shift())
    }
    if (arr.length && arr[0][0] !== undefined) {
      return map(arr, r)
    } else {
      return r
    }
  }
  return map(arr, [])
}