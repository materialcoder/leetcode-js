/**
 * 101. 对称二叉树
 * https://leetcode-cn.com/problems/symmetric-tree/
 * 给定一个二叉树，检查它是否是镜像对称的。
  例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
    1
   / \
  2   2
 / \ / \
3  4 4  3
  但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
    1
   / \
  2   2
   \   \
   3    3
 */

//  二叉树节点
class Node {
  constructor(val) {
    this.val = val
    this.left = this.right = null
  }
}

class Tree {
  constructor(data) {
    // 临时存储所有节点，方便寻找父子节点
    let nodeList = []
    // 顶节点
    let root
    for (let i = 0, len = data.length; i < len; i++) {
      let node = new Node(data[i])
      nodeList.push(node)
      if (i > 0) {
        // 计算当前节点属于哪一层（是取索引，所以是向下取整）
        let n = Math.floor(Math.sqrt(i + 1))
        // 记录当前层的起始点
        let q = Math.pow(2, n) - 1
        // 记录上一层的起始点
        let p = Math.pow(2, n - 1) - 1
        // 找到当前节点的父节点 （是取索引，所以是向下取整）
        let parent = nodeList[p + Math.floor((i - q) / 2)]
        // 将当前节点和上一层的父节点做关联
        if (parent.left) {
          parent.right = node
        } else {
          parent.left = node
        }
      }
    }
    root = nodeList.shift()
    // 释放临时内存
    nodeList.length = 0
    return root
  }

  static isSymmetry(root) {
    if (!root) {
      return true
    }
    let walk = (left, right) => {
      // 如果左节点和右节点都不存在
      if (!left && !right) {
        return true
      }
      // 如果左节点右节点不存在或者左节点存在右节点不存在或者两个都存在但值不相等则不是对称的
      if ((left && !right) || (!left && right) || (left.val !== right.val)) {
        return false
      }
      return walk(left.left, right.right) && walk(left.right, right.left)
    }
    return walk(root.left, root.right)
  }
}

export default Tree

export {
  Node
}