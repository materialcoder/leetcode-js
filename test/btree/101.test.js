import Tree from '../../code/btree/101'

test('tree:1', () => {
  let root = new Tree([1, 2, 2, 3, 4, 4, 3])
  // console.log(root)
  expect(Tree.isSymmetry(root)).toBe(true)
})

test('tree:2', () => {
  let root = new Tree([1, 2, 2, 3, 4, 5, 3])
  expect(Tree.isSymmetry(root)).toBe(false)
})

test('tree:3', () => {
  let root = new Tree([1, 2, 2, null, 3, null, 3])
  expect(Tree.isSymmetry(root)).toBe(false)
})