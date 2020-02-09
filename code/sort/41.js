/**
 * 41. 缺失的第一个正数
 * https://leetcode-cn.com/problems/first-missing-positive/
 * 给定一个未排序的整数数组，找出其中没有出现的最小的正整数。
 * 示例 1:
 * 输入: [1,2,0]
 * 输出: 3
 * 示例 2:
 * 输入: [3,4,-1,1]
 * 输出: 2
 * 示例 3:
 * 输入: [7,8,9,11,12]
 * [1,2,3,3,4,7]->[1,2,3,4,3]
 * 输出: 1
 * 说明:
 * 你的算法的时间复杂度应为O(n)，并且只能使用常数级别的空间。
 */

let method1 = (arr) => {
  // 过滤掉负数，保留正整数
  arr = arr.filter(item => item > 0)
  // 正整数数组是否为空，如果为空返回1
  if (arr.length) {
    arr.sort((a, b) => a - b)
    // 排序后的数组第一位不为1则返回1，
    // 否则从左开始遍历判断两两之间的差值
    // 如果大于1，则为前一个元素加1,如果所有元素都相邻，则返回最后一个元素加1
    if (arr[0] !== 1) {
      return 1
    } else {
      for (let i = 0, len = arr.length - 1; i < len; i++) {
        if (arr[i + 1] - arr[i] > 1) {
          return arr[i] + 1
        }
      }
      // return arr[arr.length - 1] + 1
      return arr.pop() + 1
    }
  } else {
    return 1
  }
}

// 采用选择排序 优点：不需要全部排序
let method2 = (arr) => {
  // 过滤
  arr = arr.filter(item => item > 0)
  // 实现选择排序，先拿到最小值，如果第一个元素不是1，则返回1
  // 如果是1，则比较相邻元素差值
  for (let i = 0, len = arr.length, min; i < len; i++) {
    min = arr[i]
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < min) {
        let c = min
        min = arr[j]
        arr[j] = c
      }
    }
    arr[i] = min
    if (i > 0) {
      if (arr[i] - arr[i - 1] > 1) {
        return arr[i - 1] + 1
      }
    } else {
      if (min !== 1) {
        return 1
      }
    }
  }
  return arr.length ? arr.pop() + 1 : 1
}

// 去重+选择排序 去重后遍历数组每一项是否等于下标加1
let method3 = (arr) => {
  // 过滤出正整数
  arr = arr.filter(item => item > 0)
  // 去重
  arr = Array.from(new Set(arr))
  for (let i = 0, len = arr.length, minIndex; i < len; i++) {
    minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    let tmp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = tmp
    // 去重之后，数组必须是从1开始的连续正整数，
    // 否则最小的正整数就等于下标加1
    if (arr[i] !== i + 1) {
      return i + 1
    }
  }
  return arr.length ? arr.pop() + 1 : 1
}

/**
 * 思路与上面相似，但是可以不去重
 * 对于连续的正整数数组，应符合index+1=arr[index]的条件，找到第一个
 * 不符合此条件的index，index+1即为要求的值
 * 从index=0开始遍历，目标是将所有的正整数放在他们应该在的位置上
 * 令j=arr[i]-1:
 * 如果j>=0&&j<arr.length,说明j也是arr的一个索引，判断j是否哦符合arr[j]===j+1的条件，
 * 如果不符合则将arr[i]和arr[j]交换顺序，交换后，arr[j]=原来的arr[i]=j+1,就符合条件了
 * 如果j不是索引，i++继续下一轮操作
 * 通过一轮遍历，得到数组中各项应该尽可能符合index+1=arr[index]
 * 此时再从0开始进行一次遍历，找到第一个不符合此条件的值即可
 * [1,2,0] 第一遍遍历后 [1,2,0]
 * [3,4,-1,1] 第一遍遍历后 [1,-1,3,4]
 * [7,8,9,11,12] 第一遍遍历后 [7,8,9,11,12]
 * [1,2,3,3,4,7] 第一遍遍历后 [1,2,3,4,3,7]
 */
let method4 = (arr) => {
  let i = 0
  let j
  let tmp
  while (i < arr.length) {
    j = arr[i] - 1
    if (j >= 0 && j < arr.length && arr[j] !== j + 1) {
      tmp = arr[i]
      arr[i] = arr[j]
      arr[j] = tmp
    } else {
      i++
    }
  }
  i = 0
  while (i < arr.length && arr[i] === i + 1) i++
  return i + 1
}

export default method4
