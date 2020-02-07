/**
 * 557. 反转字符串中的单词
 * 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序
 * 示例 1：
 * 输入： "Let's take LeetCode contest"
 * 输出： "s'teL ekat edoCteeL tsetnoc"
 * 注意：在字符串中，每个单词由空格分开，并且字符串中不会有额外的空格。
 */

// export default (str) => {
//   // 字符串按空格进行分隔，保存数组，数组元素的先后顺序就是单词的顺序
//   let arr = str.split(' ')
//   // 对每个单词进行反转
//   let result = arr.map(item => {
//     return item.split('').reverse().join('')
//   })
//   return result.join(' ')
// }

// 更优雅的写法
// export default (str) => {
//   // 1.字符串按空格进行分隔，保存数组，数组元素的先后顺序就是单词的顺序
//   // 2.对每个单词进行反转
//   return str.split(' ').map(item => {
//     return item.split('').reverse().join('')
//   }).join(' ')
// }

// 用正则
// export default (str) => {
//   // 1.字符串按空格进行分隔，保存数组，数组元素的先后顺序就是单词的顺序
//   // 2.对每个单词进行反转
//   return str.split(/\s/g).map(item => {
//     return item.split('').reverse().join('')
//   }).join(' ')
// }

// export default (str) => {
//   // 1.字符串按空格进行分隔，保存数组，数组元素的先后顺序就是单词的顺序
//   // 2.对每个单词进行反转
//   // /[\w']+/g 匹配字符和单引号 会存在问题：对于字符串中含-<>等特殊字符的时候无法达到要求
//   // /\S+/ 非空格
//   return str.match(/\S+/g).map(item => {
//     return item.split('').reverse().join('')
//   }).join(' ')
// }

// 使用展开运算符
export default (str) => {
  // 1.字符串按分隔成字符串，反转后再合并，得到一个对整个字符串的反转
  // 2.对反转后的字符串按空格进行分隔，得到数组，反转后再按空格合并
  return [...str].reverse().join('').split(' ').reverse().join(' ')
}
