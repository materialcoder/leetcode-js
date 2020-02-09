/**
 * 快速排序
 * 首先选定一个标尺，比它小的放在它的左边，比它大的放在它的右边
 */
export default (arr) => {
  let quickSort = (arr) => {
    let len = arr.length
    if (len < 2) {
      return arr
    } else {
      // 选择标尺元素
      let flag = arr[0]
      let left = []
      let right = []
      // 把剩余的元素遍历一下，比标尺元素小的放左边，大的放右边
      for (let i = 1, tmp; i < len; i++) {
        tmp = arr[i]
        if (tmp < flag) {
          left.push(tmp)
        } else {
          right.push(tmp)
        }
      }
      // 进行递归操作
      return quickSort(left).concat(flag, quickSort(right))
    }
  }
  return quickSort(arr)
}
