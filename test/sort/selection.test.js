import selectionSort from '../../code/sort/selection'

test('选择排序', () => {
  expect(selectionSort([1, 9, 3, 5, 2, 4, 3])).toEqual([1, 2, 3, 3, 4, 5, 9])
})
