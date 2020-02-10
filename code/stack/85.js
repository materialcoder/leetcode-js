/**
 * 85. 最大矩形
 * https://leetcode-cn.com/problems/maximal-rectangle/
 * 给定一个仅包含 0 和 1 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。
  示例:

  输入:
  [
    ["1","0","1","0","0"],
    ["1","0","1","1","1"],
    ["1","1","1","1","1"],
    ["1","0","0","1","0"]
  ]
  输出: 6
 */
// 当 RegExp 是一个全局正则表达式时，exec() 的行为就稍微复杂一些。 它会在 RegExp 的 lastIndex
// 属性指定的字符处开始检索字符串 string。 当 exec() 找到了与表达式相匹配的文本时，在匹配后，它将把 RegExp 的 lastIndex
// 属性设置为匹配文本的最后一个字符的下一个位置。 这就是说，可以通过反复调用 exec() 方法来遍历字符串中的所有匹配文本。 当 exec()
// 再也找不到匹配的文本时，它将返回 null，并把 lastIndex 属性重置为 0。
/**
 * [
 *  [0,1,1,1,0,0,1,1,1,1,0,0],
 *  [0,0,1,1,0,1,1,1,1,0,0,1],
 *  [0,1,1,1,0,0,1,1,1,1,0,0],
 *  [0,1,0,1,1,1,1,1,1,1,0,0],
 *  [0,1,1,0,0,0,1,1,1,1,1,0],
 * ]
 */
export default (arr) => {
  let result = []
  // 至少两个1以上
  let reg = /1{2,}/g
  // 把二维数组重新表达，把相邻的1提取出来（起始点+截止点）
  arr = arr.map(item => {
    let str = item.join('')
    let r = reg.exec(str)
    let rs = []
    while (r) {
      rs.push([
        r.index, r.index + r[0].length - 1
      ])
      r = reg.exec(str)
    }
    return rs
  })
  /* [                      [
      [[1,3],[6,9]], ---      [[2,3],[6,8]],
      [[2,3],[5,8]],  /       [[1,3],[6,9]],
      [[1,3],[6,9]],   ==>    [[3,9]],
      [[3,9]],                [[1,2],[6,10]]
      [[1,2],[6,10]]        ]
    ]
  */
  // 通过递归计算相邻的矩阵
  let maxRect = (arr, result, n = 1) => {
    // 弹出第一行
    let top = arr.pop()
    // 弹出第二行
    let next = arr.pop()
    // 记录第一行的每一个起始点和截止点
    let tt
    // 记录第二行的每一个起始点和截止点
    let nn
    // 记录交叉的起始索引
    let start
    // 记录交叉的截止索引
    let end
    // 交集宽度
    let width = 1
    // 交叉点的最大交集
    let maxWidth = 1
    // 处理了多少行
    n += 1
    // 遍历计算第一行每个区间和第二行每个区间的交集
    for (let i = 0, il = top.length; i < il; i++) {
      tt = top[i]
      for (let j = 0, jl = next.length; j < jl; j++) {
        nn = next[j]
        // 交集宽度=截止点的最小值-起始点的最大值
        width = Math.min(tt[1], nn[1]) - Math.max(tt[0], nn[0])
        // 如果有多个交集，这里要取最大的宽度
        if (width > maxWidth) {
          maxWidth = width
          start = Math.max(tt[0], nn[0])
          end = Math.min(tt[1], nn[1])
        }
      }
    }
    // 如果没有找到交叉点
    if (start === undefined || end === undefined) {
      // n<3并且没有找到交集，则肯定没有矩形
      if (n < 3) {
        return false
      } else {
        // 大于等于3行的时候，有可能会没有交集，这是要看它前面的交集宽度是否大于1，大于1则表示是有矩形的
        width = top[0][1] - top[0][0] + 1
        if (width > 1) {
          // 计算矩形面积
          result.push((n - 1) * width)
        }
      }
    } else {
      // 如果找到交叉点
      arr.push([
        [start, end]
      ])
      maxRect(arr, result, n++)
    }
  }
  // 逐行进行计算
  while (arr.length > 1) {
    maxRect([].concat(arr), result)
    arr.pop()
  }
  // 取最大值
  let max = 0
  let item = result.pop()
  while (item) {
    if (item > max) {
      max = item
    }
    item = result.pop()
  }
  return max > 0 ? max : -1
}