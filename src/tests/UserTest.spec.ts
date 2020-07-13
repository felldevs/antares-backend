import { User } from '@models/User'

test('it should be ok', () => {
  const user = new User();
  user.name = 'Fellipe';
  expect(user.name).toEqual('Fellipe');
})