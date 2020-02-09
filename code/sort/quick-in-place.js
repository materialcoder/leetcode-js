/**
 * 快速排顺
 * in-place算法
 * 划分交换排序
 * 例如：
 * 5 9 7 8 3 6 1
 * 第一轮交换（标尺 5）：5 9 7 8 3 6 1 -> 5 3 7 8 9 6 1 -> 5 3 1 8 9 6 7 -> 1 3 5 8 9 6 7
 *                     ↑ ↑     ↑        ↑   ↑       ↑    ↑   ↑
 */
export default (arr) => {
  // 数组指定两个位置进行值交换
  let swap = (arr, i, j) => {
    let tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
  }
  // 标尺元素所在的位置 完成一次划分交换
  let findCenter = (arr, left, right) => {
    let flag = arr[left]
    let idx = left + 1
    for (let i = idx; i <= right; i++) {
      if (arr[i] < flag) {
        swap(arr, idx, i)
        idx++
      }
    }
    swap(arr, left, idx - 1)
    return idx
  }
  // 递归排序
  let sort = (arr, left, right) => {
    if (left < right) {
      let center = findCenter(arr, left, right)
      sort(arr, left, center - 1)
      sort(arr, center, right)
    }
  }
  sort(arr, 0, arr.length - 1)
  return arr
}
