// [2,34,43,2,1,5,5,6,3,4,1]
import sort from '../../code/sort/quick-in-place'

test('sort', () => {
  expect(sort([1, 2, 0])).toEqual([0, 1, 2])
  expect(sort([5, 3, 7, 4, 1, 2, 9, 6])).toEqual([1, 2, 3, 4, 5, 6, 7, 9])
  expect(sort([1, 2, 4, 2, 3, 0])).toEqual([0, 1, 2, 2, 3, 4])
})
