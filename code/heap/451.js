/**
 * 451. 根据字符出现频率排序
 * https://leetcode-cn.com/problems/sort-characters-by-frequency/
 * 给定一个字符串，请将字符串里的字符按照出现的频率降序排列。
  示例 1:
  输入:
  "tree"
  输出:
  "eert"
  解释:
  'e'出现两次，'r'和't'都只出现一次。
  因此'e'必须出现在'r'和't'之前。此外，"eetr"也是一个有效的答案。
 */
class Heap {
  constructor(str) {
    let map = new Map()
    // 输入字符串转为数组
    str.split('').forEach(item => {
      if (map.has(item)) {
        map.set(item, map.get(item) + 1)
      } else {
        map.set(item, 1)
      }
    })
    this.map = map
    this.data = Array.from(map.values())
  }
  sort() {
    let iArr = this.data
    let n = iArr.length
    if (n < 1) {
      return iArr
    } else {
      // 从最后一个父节点开始 最后一个子节点与父节点的关系：n=i*2+1 => i = (n-1)/2
      for (let i = Math.floor(n / 2); i >= 0; i--) {
        Heap.maxHeapify(iArr, i, n)
      }
      // 一次完整的最大堆构建可以找到最大值,所以要进行n次最大堆构建
      for (let j = 0; j < n; j++) {
        // 最后一个值和第0个值进行交换
        Heap.swap(iArr, 0, n - 1 - j)
        // 交换后会从堆顶上破坏最大堆，因此要从最顶上开始在再次构建最大堆
        Heap.maxHeapify(iArr, 0, n - 1 - j - 1)
      }
      return iArr
    }
  }
  // 输出字符串
  toString() {
    let arr = this.sort()
    let str = []
    while (arr.length) {
      let top = arr.pop()
      for (let [k, v] of this.map) {
        if (v === top) {
          str.push(k.repeat(v))
          this.map.delete(k)
          break
        }
      }
    }
    return str.join('')
  }
  /**
   * 交换两个元素
   * @param {Array} arr
   * @param {Number} a
   * @param {Number} b
   */
  static swap(arr, a, b) {
    if (a === b) {
      return ''
    }
    let c = arr[a]
    arr[a] = arr[b]
    arr[b] = c
  }
  /**
   * 构建最大堆
   * @param {Array} arr
   * @param {Number} i 父节点索引
   * @param {Number} size 有效长度
   */
  static maxHeapify(arr, i, size) {
    // 左节点索引
    let l = i * 2 + 1
    // 右节点
    let r = i * 2 + 2
    let largest = i
    // 如果左节点小于有效长度；父节点i和左节点l比较取最大值
    if (l <= size && arr[l] > arr[largest]) {
      largest = l
    }
    // 右节点和最大值比较
    if (r < size && arr[r] > arr[largest]) {
      largest = r
    }
    if (largest !== i) {
      Heap.swap(arr, i, largest)
      // 可能会影响子树的结构，所以还要对子树进行一次最大堆化
      Heap.maxHeapify(arr, largest, size)
    }
  }
}

export default Heap