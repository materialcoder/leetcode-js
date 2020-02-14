import cheap from '../../code/dp/787'

test('cheap1', () => {
  let edges = [
    [0, 1, 100],
    [1, 2, 100],
    [0, 2, 500]
  ]
  expect(cheap(edges, 0, 2, 1)).toBe(200)
})

test('cheap2', () => {
  let edges = [
    [0, 1, 100],
    [1, 2, 100],
    [0, 2, 500]
  ]
  expect(cheap(edges, 0, 2, 0)).toBe(500)
})