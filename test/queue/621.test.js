import leastInterval from '../../code/queue/621'

test('leastInterval', () => {
  expect(leastInterval(["A", "A", "A", "B", "B", "B"], 2)).toBe(8)
  expect(leastInterval(["A", "A", "A", "A", "B", "B", "B", "C", "C"], 1)).toBe(9)
  expect(leastInterval(["A", "A", "B", "B", "C", "C", "D", "D"], 2)).toBe(8)
})