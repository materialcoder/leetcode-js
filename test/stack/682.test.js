import baseball from '../../code/stack/682'

test('baseball', () => {
  expect(baseball(['5', '2', 'C', 'D', '+'])).toBe(30)
  expect(baseball(['5', '-2', '4', 'C', 'D', '9', '+', '+'])).toBe(27)
})
