/**
 * 215. 数组中的第K个最大元素
 * https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
 * 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 * 示例 1:
 * 输入: [3,2,1,5,6,4] 和 k = 2
 * 输出: 5
 * 示例 2:
 * 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
 * 输出: 4
 */
// 使用原生的sort方法进行排序 但是时间复杂度不令人满意
let method1 = (arr, k) => {
  // 降序排列
  return arr.sort((a, b) => b - a)[k - 1]
}

// 使用冒泡排序法 只需要冒泡K次即可找到第K大的值
let method2 = (arr, k) => {
  let len = arr.length - 1
  for (let i = len, tmp; i > len - k; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j + 1] < arr[j]) {
        tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }
  }
  return arr[len - k + 1]
}

export default method2
