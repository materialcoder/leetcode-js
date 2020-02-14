/**
 * 787. K 站中转内最便宜的航班
 * https://leetcode-cn.com/problems/cheapest-flights-within-k-stops/
 * 示例 1:
  输入: 
  n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
  src = 0, dst = 2, k = 1
  输出: 200
  示例 2:
  输入: 
  n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
  src = 0, dst = 2, k = 0
  输出: 500
 */
// F(src,dst,k) = Min(F(src,dst-1,k-1) + F(dst-1,dst,1))
// 边界：从终点站往前推，如果在k站内找到起始站，则满足条件，最后计算路费最少的即可

export default (edges, src, dst, k) => {
  // 路线说明
  // edges = [
  //   [0, 1, 100],
  //   [1, 2, 100],
  //   [0, 2, 500]
  // ]
  let cheap = (src, dst, k) => {
    // 找到dst的前一站
    let prev = edges.filter(item => item[1] === dst)
    let min = Math.min.apply(null, prev.map(item => {
      // 从dst往前找，在k站内找到了起始城市
      if (item[0] === src && k > -1) {
        return item[2]
      } else if (k === 0 && item[0] !== src) {
        // 从dst往前找了k站，没有到达起始站，由于是取所有路线的最小值，所有这里把返回值设置为最大数
        return Number.MAX_SAFE_INTEGER
      } else {
        return item[2] + cheap(src, item[0], k - 1)
      }
    }))
    return min
  }
  return cheap(src, dst, k) || -1
}