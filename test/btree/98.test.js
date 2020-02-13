import Tree, {
  Node
} from '../../code/btree/98'

test('Tree:1', () => {
  let root = new Tree([2, 1, 3])
  console.log(root)
  expect(Tree.walk(root)).toBe(true)
})

test('Tree:2', () => {
  // let root = new Tree([5, 1, 4, null, null, 3, 6])
  let root = new Node(2)
  root.left = new Node(3)
  root.right = new Node(1)
  console.log(root)
  expect(Tree.walk(root)).toBe(false)
})