/**
 * 605. 种花问题
 * https://leetcode-cn.com/problems/can-place-flowers/
 * 假设你有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花卉不能种植在相邻的地块上，它们会争夺水源，两者都会死去。
  给定一个花坛（表示为一个数组包含0和1，其中0表示没种植花，1表示种植了花），和一个数n。
  能否在不打破种植规则的情况下种入n朵花？能则返回True，不能则返回False。

  示例 1:
  输入: flowerbed = [1,0,0,0,1], n = 1
  输出: True

  示例 2:
  输入: flowerbed = [1,0,0,0,1], n = 2
  输出: False
  注意:

  数组内已种好的花不会违反种植规则。
  输入的数组长度范围为 [1, 20000]。
  n 是非负整数，且不会超过输入数组的大小。
 */

/**
 * 1.问题抽象
 * 2.数学建模 0 无花 1 有花
 * 3.动态输入 改变测试用例，寻找规律
 */

// 依次扫描，判断左右是否为0，如果左右都为0，则满足条件，同时指针要向后移一位
let method1 = (arr, n) => {
  // 计数器
  let max = 0
  // 如果长度为1，并且为0则可以种1朵花
  if (arr.length === 1 && arr[0] === 0) {
    max = 1
  }
  for (let i = 0, len = arr.length - 1; i < len; i++) {
    if (arr[i] === 0) {
      // 如果第一位为0并且第二位也为0，则第一位可以种一朵花
      // [0,0,1]
      // 如果扫描到最后一位，最后一位为0，并且倒数第二位也为0，则最后一位可以种花
      // [1,0,0] [1,0,0,0,0] 最后一位要加1 但 [1,0] [1,0,0,0]最后一位不能
      if (i === 0 && arr[1] === 0) {
        max++
        i++
      } else if (i === len && arr[i] === 0 && arr[i - 1] === 0) {
        max++
        i++
      } else if (arr[i - 1] === 0 && arr[i + 1] === 0) {
        max++
        i++
      }
    }
  }
  return n <= max
}

// 有连续三个0则可以在中间种一朵花
// 注意：第一位要在它之前补一个0，最后一位要再它之后补一个0
let method2 = (arr, n) => {
  let max = 0
  for (let i = 0, len = arr.length; i < len; i++) {
    let pre = arr[i - 1]
    let cur = arr[i]
    let next = arr[i + 1]
    if (pre === undefined) pre = 0
    if (next === undefined) next = 0
    if (pre === 0 && cur === 0 && next === 0) {
      max++
      // 种下一朵花
      arr.splice(i, 1, 1)
    }
  }
  return n <= max
}

export default method2
