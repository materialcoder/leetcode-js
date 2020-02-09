import sort from '../../code/sort/41'

test('sort', () => {
  expect(sort([1, 2, -1])).toBe(3)
  expect(sort([3, 4, -1, 1])).toBe(2)
  expect(sort([7, 8, 9, 11, 12])).toBe(1)
  expect(sort([1, 2, 3, 4, 5, 6])).toBe(7)
})
