/**
 * 48. 旋转图像
 * https://leetcode-cn.com/problems/rotate-image/
 * 给定一个 n × n 的二维矩阵表示一个图像。将图像顺时针旋转 90 度。
  说明：
  你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。
  示例 1:
  给定 matrix = 
  [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ],

  原地旋转输入矩阵，使其变为:
  [
    [7,4,1],
    [8,5,2],
    [9,6,3]
  ]
 */
/**
 * 先垂直翻转，在对角线翻转
  [                   [                   [
    [1,2,3],            [7,8,9],            [7,4,1],
    [4,5,6],    --->    [4,5,6],    --->    [8,5,2],
    [7,8,9]             [1,2,3]             [9,6,3]
  ]                   ]                   ]
 */
let method1 = (arr) => {
  // 获取矩阵维度
  let vechor = arr.length
  // 垂直翻转
  for (let i = 0, len = vechor / 2; i < len; i++) {
    for (let j = 0, tmp; j < vechor; j++) {
      tmp = arr[i][j]
      arr[i][j] = arr[vechor - i - 1][j]
      arr[vechor - i - 1][j] = tmp
    }
  }
  // 对角线翻转
  for (let i = 0; i < vechor; i++) {
    // 对角线
    for (let j = 0, tmp; j < i; j++) {
      tmp = arr[i][j]
      arr[i][j] = arr[j][i]
      arr[j][i] = tmp
    }
  }
  return arr
}

/**
 * 先对角线翻转（转置），再反转
  [                   [                   [
    [1,2,3],            [1,4,7],            [7,4,1],
    [4,5,6],    --->    [2,5,8],    --->    [8,5,2],
    [7,8,9]             [3,6,9]             [9,6,3]
  ]                   ]                   ]
 * @param {Array} arr
 * @return {Array}
 */
let method2 = (arr) => {
  let vechor = arr.length
  for (let i = 0; i < vechor; i++) {
    for (let j = 0, tmp; j < i; j++) {
      tmp = arr[i][j]
      arr[i][j] = arr[j][i]
      arr[j][i] = tmp
    }
  }
  return arr.map(item => item.reverse())
}

export default method2