import dp from '../../code/dp/63'

test('dp:1', () => {
  let input = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
  ]
  expect(dp(input, 3, 3)).toBe(2)
})

test('dp:2', () => {
  let input = [
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0]
  ]
  expect(dp(input, 5, 4)).toBe(7)
})