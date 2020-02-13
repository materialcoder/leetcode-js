import Heap from '../../code/heap/451'

test('heap:1', () => {
  let heap = new Heap('chcaa')
  expect(heap.toString()).toMatch(/ccaah|aacch/)
})