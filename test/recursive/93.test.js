import ip from '../../code/recursive/93'

test('ip', () => {
  expect(ip('25525511135')).toEqual(['255.255.11.135', '255.255.111.35'])
  expect(ip('010010')).toEqual(['0.10.0.10', '0.100.1.0'])
})
