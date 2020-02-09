import words from '../../code/recursive/30'

test('words:1', () => {
  expect(words('barfoothefoobarman', ['foo', 'bar'])).toEqual([0, 9])
})

test('words:2', () => {
  expect(words('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word'])).toEqual([])
})

test('words:3', () => {
  expect(words('foobarfoobar', ['foo', 'bar'])).toEqual([0, 3, 6])
})

test('words:4', () => {
  expect(words('aaaaaaaa', ['aa', 'aa', 'aa'])).toEqual([0, 1, 2])
})
