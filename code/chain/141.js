/**
 * 141. 环形链表
 * https://leetcode-cn.com/problems/linked-list-cycle/
 * 给定一个链表，判断链表中是否有环。
 * 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。
 * 如果 pos 是 -1，则在该链表中没有环。
 */
// 声明一个节点
class Node {
  constructor(value) {
    this.val = value
    this.next = undefined
  }
}

// 声明链表的数据结构
class NodeList {
  constructor(arr) {
    // 声明链表的头部节点
    let head = new Node(arr.shift())
    let next = head
    // 节点实例化
    arr.forEach(item => {
      next.next = new Node(item)
      next = next.next
    })
    return head
  }
}

export default function isCircle(head) {
  // 双指针 一个快指针 一个慢指针
  let slow = head
  let fast = head.next
  while (1) {
    // 1.只有一个节点或者快指针的下一个节点为undefined的话，表示不是环形链表
    // 2.如果快指针等于慢指针或者快指针跑到慢指针后面了，则表示是环形链表
    // 3.慢指针按一步递进，快指针按两步递进
    if (!fast || !fast.next) {
      return false
    } else if (fast === slow || fast.next === slow) {
      return true
    } else {
      slow = slow.next
      fast = fast.next.next
    }
  }
}

export {
  Node,
  NodeList
}