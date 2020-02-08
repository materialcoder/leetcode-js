/**
 * 选择排序
 */

// export default (arr) => {
//   for (let i = 0, len = arr.length, min; i < len; i++) {
//     min = arr[i]
//     for (let j = i + 1; j < len; j++) {
//       if (arr[j] < min) {
//         let c = min
//         min = arr[j]
//         arr[j] = c
//       }
//     }
//     arr[i] = min
//   }
//   return arr
// }

export default (arr) => {
  for (let i = 0, len = arr.length, minIndex; i < len; i++) {
    minIndex = i
    // 找到最小值的索引
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    // 最小值和当前值交换位置
    let tmp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = tmp
  }
  return arr
}
