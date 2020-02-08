import bubbleSort from '../../code/sort/bubble'

test('冒泡排序', () => {
  expect(bubbleSort([1, 5, 2, 8, 9, 3])).toEqual([1, 2, 3, 5, 8, 9])
})
