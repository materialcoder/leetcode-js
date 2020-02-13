class Heap {
  constructor(data) {
    this.data = data
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
  /**
   * 交换两个元素
   * @param {*} arr
   * @param {*} a
   * @param {*} b
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