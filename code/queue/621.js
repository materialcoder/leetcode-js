/**
 * 621. 任务调度器
 * https://leetcode-cn.com/problems/task-scheduler/
 * 给定一个用字符数组表示的 CPU 需要执行的任务列表。
 * 其中包含使用大写的 A - Z 字母表示的26 种不同种类的任务。
 * 任务可以以任意顺序执行，并且每个任务都可以在 1 个单位时间内执行完。
 * CPU 在任何一个单位时间内都可以执行一个任务，或者在待命状态。
 * 然而，两个相同种类的任务之间必须有长度为 n 的冷却时间，因此至少有连续 n 个单位时间内 CPU 在执行不同的任务，或者在待命状态。
 * 
 * 你需要计算完成所有任务所需要的最短时间。
 * 示例 1：
 * 输入: tasks = ["A","A","A","B","B","B"], n = 2
 * 输出: 8
 * 执行顺序: A -> B -> (待命) -> A -> B -> (待命) -> A -> B.
 * 注：
 * 任务的总个数为 [1, 10000]。
 * n 的取值范围为 [0, 100]。
 */
export default (tasks, n) => {
  let q = ''
  // 任务分类
  let Q = {}
  // 分类不同的任务
  tasks.forEach(item => {
    if (Q[item]) {
      Q[item]++
    } else {
      Q[item] = 1
    }
  })
  while (1) {
    // 不同的任务
    let keys = Object.keys(Q)
    // 当所有任务都执行完了，退出
    if (!keys[0]) {
      break
    }
    // n+1为一组
    let tmp = []
    // 优先执行多的任务
    for (let i = 0; i <= n; i++) {
      let max = 0
      // 当前执行的任务类型
      let key
      let pos
      // 从所有的任务中找到未处理数最大的优先安排
      keys.forEach((item, idx) => {
        if (Q[item] > max) {
          max = Q[item]
          key = item
          pos = idx
        }
      })
      if (key) {
        tmp.push(key)
        keys.splice(pos, 1)
        Q[key]--
        // 如果当前key的任务都执行完了，则要在队列中删除这个key
        if (Q[key] < 1) {
          delete Q[key]
        }
      } else {
        break
      }
    }
    // padEnd 尾部补全 如果长度小于n+1则用'-'补全; 相对应的是 padStart
    q += tmp.join('').padEnd(n + 1, '-')
  }
  // A--A--A--
  q = q.replace(/-+$/g, '')
  return q.length
}