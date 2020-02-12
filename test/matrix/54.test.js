import matrix from '../../code/matrix/54'

test('matrix', () => {
  let input = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
  expect(matrix(input)).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5])
})

test('matrix:2', () => {
  let input = [
    [2, 5],
    [8, 4],
    [0, -1]
  ]
  expect(matrix(input)).toEqual([2, 5, 4, -1, 0, 8])
})

test('matrix:2', () => {
  let input = [
    [1],
    [2],
    [3],
    [4],
    [5],
    [6],
    [7],
    [8],
    [9],
    [10]
  ]
  expect(matrix(input)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
})