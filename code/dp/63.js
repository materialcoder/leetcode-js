/**
 * 63. 不同路径 II
 * https://leetcode-cn.com/problems/unique-paths-ii/
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
  机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
  现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？(1表示有障碍物)
  ↓                 ↓
  0 0 0 0 0 0       0 0 0 0 0 0       0 0 0 0 0 0       0 0 0 0 0
  0 0 0 0 0 0   ->  0 0 1 0 0 0   ->  0 0 0 0 0 0   +   0 0 0 0 0
  0 0 0 0 0 0       0 0 0 0 0 0                 *       0 0 0 0 0 *
            ↑                 ↑
  F(m*n) = F(m-1*n) + F(m*n-1)
  边界 1: 两行两列
  0 0    0 1    0 0    0 1    0 0
  0 0    0 0    1 0    1 0    0 1
  边界2：单行或者单列
 */
export default (arr, m, n) => {
  let dp = (m, n) => {
    if (arr[m - 1][n - 1] === 1 || arr[0][0] === 1) {
      return 0
    }
    // 边界条件
    if (m === 2 && n === 2) {
      return (arr[1][1] === 1 || arr[1][0] + arr[0][1] === 2) ? 0 : (arr[1][0] + arr[0][1] === 1 ? 1 : 2)
      // return (arr[1][1] === 1 || arr[1][0] + arr[0][1] === 2) ? 0 : (arr[1][0] === 1 || arr[0][1] === 1) ? 1 : 2
    } else if (m < 2 || n < 2) {
      // 单行
      if (m < 2) {
        return arr[m - 1].includes(1) ? 0 : 1
      } else {
        // 单列
        for (let i = 0; i < m; i++) {
          if (arr[i][0] === 1) {
            return 0
          }
        }
        return 1
      }
    } else {
      return dp(m - 1, n) + dp(m, n - 1)
    }
  }
  return dp(m, n)
}