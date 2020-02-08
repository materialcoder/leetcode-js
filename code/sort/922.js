/**
 * 922. 按奇偶排序数组 II
 * https://leetcode-cn.com/problems/sort-array-by-parity-ii/
 * 给定一个非负整数数组A， A 中一半整数是奇数，一半整数是偶数。
 * 对数组进行排序，以便当A[i]为奇数时，i也是奇数；当A[i]为偶数时， i 也是偶数。
 * 你可以返回任何满足上述条件的数组作为答案。
 * 示例：
 * 输入：[4,2,5,7]
 * 输出：[4,5,2,7]
 * 解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。
 */

let method1 = (arr) => {
  // 进行升序排序
  arr.sort((a, b) => a - b)
  // 声明一个空数组用来存储奇偶排序后的数组
  let r = []
  // 记录奇数、偶数位下标
  let odd = 1
  let even = 0
  // 对数组进行遍历
  arr.forEach(item => {
    if (item % 2 === 1) {
      r[odd] = item
      odd += 2
    } else {
      r[even] = item
      even += 2
    }
  })
  return r
}

// 不排序，直接进行双指针一次遍历
let method2 = (arr) => {
  let r = []
  let odd = 1
  let even = 0
  arr.forEach(item => {
    if (item % 2 === 0) {
      r[even] = item
      even += 2
    } else {
      r[odd] = item
      odd += 2
    }
  })
  return r
}

// 上面方法的优化：上面单独声明了一个变量r来暂存，暂用的存储空间
// 只要保证偶数下标上的是偶数，则奇数下标上的就一定是奇数
// 遍历判断偶数位上的数字是否为偶数，如果不是则找到奇数位上不为奇数的进行交换
let method3 = (arr) => {
  let j = 1
  for (let i = 0, len = arr.length; i < len; i += 2) {
    if (arr[i] % 2) {
      while (arr[j] % 2) {
        j += 2
      }
      let tmp = arr[i]
      arr[i] = arr[j]
      arr[j] = tmp
    }
  }
  return arr
}

export default method3
