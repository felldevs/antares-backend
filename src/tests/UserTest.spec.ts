import { User } from '@models/User';

test('it should test', () => {
    const user = new User();
    user.name = "Fellipe";
    expect(user.name).toEqual("Fellipe");
})