/**
 * 313. 超级丑数
 * https://leetcode-cn.com/problems/super-ugly-number/
 * 编写一段程序来查找第 n 个超级丑数。
  超级丑数是指其所有质因数都是长度为 k 的质数列表 primes 中的正整数。
  示例:
  输入: n = 12, primes = [2,7,13,19]
  输出: 32 
  解释: 给定长度为 4 的质数列表 primes = [2,7,13,19]，前 12 个超级丑数序列为：[1,2,4,7,8,13,14,16,19,26,28,32] 。
  说明:
    1 是任何给定 primes 的超级丑数。
    给定 primes 中的数字以升序排列。
    0 < k ≤ 100, 0 < n ≤ 106, 0 < primes[i] < 1000 。
    第 n 个超级丑数确保在 32 位有符整数范围内。
 */
/* 
  质数：只能被1和被本身整除的数
  质因数：一个数的约数，并且是质数
  丑数：只包含因子2，3，5的正整数，如 4，10，12都是丑数
*/
// 1.求解任意整数的质因数
// 2.质因数是否在指定质因数范围内
// 3.是否达到指定个数n
class Ugly1 {
  constructor(n, primes) {
    this.n = n
    this.primes = primes
  }
  getAll() {
    // 超级丑数列表
    let res = [1]
    let i = 2
    let primes = this.primes
    while (res.length < this.n) {
      let arr = Ugly.getPrimes(i)
      let k = 0
      let l = arr.length
      for (; k < l; k++) {
        if (!primes.find(item => item === arr[k])) {
          break
        }
      }
      // k=l有两种情况：1.都等于0 即没有找到质因数（i本身就是质数）；
      // 2.完成了整个for循环 即arr里面的数都在primes里面
      if (k === l) {
        if (l === 0) {
          if (primes.find(item => item === i)) {
            res.push(i)
          }
        } else {
          res.push(i)
        }
      }
      i++
    }
    return res[this.n - 1]
  }
  /**
   * 计算指定正整数的质因数
   * @param {Number} n 
   */
  static getPrimes(n) {
    let prime = (n) => {
      // 存储所有的质因数
      let arr = []
      for (let i = 2; i < n / 2 + 1; i++) {
        if (n % i === 0 && !prime(i).length) {
          arr.push(i)
        }
      }
      return arr
    }
    return prime(n)
  }
}

class Ugly {
  constructor(n, primes) {
    this.n = n
    // 最大堆
    this.primes = new Heap(primes)
  }
  getAll() {
    // 超级丑数列表
    let res = [1]
    let i = 2
    let primes = this.primes
    while (res.length < this.n) {
      let arr = Ugly.getPrimes(i)
      let k = 0
      let l = arr.length
      for (; k < l; k++) {
        if (!primes.find(arr[k])) {
          break
        }
      }
      // k=l有两种情况：1.都等于0 即没有找到质因数（i本身就是质数）；
      // 2.完成了整个for循环 即arr里面的数都在primes里面
      if (k === l) {
        if (l === 0) {
          if (primes.find(i)) {
            res.push(i)
          }
        } else {
          res.push(i)
        }
      }
      i++
    }
    return res[this.n - 1]
  }
  /**
   * 计算指定正整数的质因数
   * @param {Number} n 
   */
  static getPrimes(n) {
    let prime = (n) => {
      // 存储所有的质因数
      let arr = []
      for (let i = 2; i < n / 2 + 1; i++) {
        if (n % i === 0 && !prime(i).length) {
          arr.push(i)
        }
      }
      return arr
    }
    return prime(n)
  }
}

class Heap {
  constructor(arr) {
    this.data = arr
    this.max = arr.length
    this.sort()
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
      return iArr
    }
  }
  /**
   * 查找
   * @param {*} val 要查找的值
   * @param {*} i 节点
   */
  find(val, i = 0) {
    let arr = this.data
    // 如果要查找的值比当前节点的值要大，或者要查找的节点数大于最大的节点数就直接返回
    // 如果要查找的值等于当前节点的值，则说明找到了，直接返回即可
    // 否则 继续比较左节点或者右节点的值，满足其中之一即可
    if (val > arr[i] || i > this.max) {
      return false
    } else if (val === arr[i]) {
      return val
    } else {
      return this.find(val, i * 2 + 1) || this.find(val, i * 2 + 2)
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

export default Ugly

export {
  Heap
}