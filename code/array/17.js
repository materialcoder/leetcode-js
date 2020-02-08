/**
 * 17. 电话号码的字母组合
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
  给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

  示例:
  输入："23"
  输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

  说明:
  尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。
 */

// 每两个进行组合，将组合的结果再与下一个进行组合
export default (str) => {
  // 如果输入为空，则返回空数组
  if (!str) {
    return []
  }
  // 建立电话号码键盘映射
  // 输入的数字与数组的下标对应
  let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  // 把输入的字符串按单字符分隔成数组
  let num = str.split('')
  // 保存键盘映射后的字母内容
  let code = []
  num.forEach(item => {
    // arr[0] 和 arr['0'] 是一样的
    if (map[item]) {
      code.push(map[item])
    }
  })
  // 如果字符串长度为1，则返回该字符串 如 '2' -> ['a', 'b', 'c']
  if (code.length === 1) {
    return code[0].split('')
  }
  let comb = (arr) => {
    // 临时变量用来保存前两项组合的结果
    let tmp = []
    // 最外层的循环是遍历第一个元素，里层的循环是遍历第二个元素
    for (let i = 0, il = arr[0].length; i < il; i++) {
      for (let j = 0, jl = arr[1].length; j < jl; j++) {
        tmp.push(`${arr[0][i]}${arr[1][j]}`)
      }
    }
    arr.splice(0, 2, tmp)
    if (arr.length > 1) {
      comb(arr)
    } else {
      return tmp
    }
    // 不加最后的return也不会有任何问题，但是在递归过程中没有进入else条件的情况下会返回undefined
    return arr[0]
  }
  return comb(code)
}
