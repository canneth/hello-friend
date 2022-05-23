
import User from '@src/database/schemas/User';
import knexClient from '@src/database/client';
import { getUserByEmail, getUserById } from './users.service';

describe('getUserById(user)', () => {
  it('if the corresponding user exists in the database, returns the user', async () => {
    /* Setup */
    const testUser: User = {
      userId: 'fc72363c-4d5e-4884-9241-545e911049e8',
      email: 'some@email.com',
      handle: 'some-handle',
      password: 'some-password',
      name: 'Some Name',
      avatarSrc: 'some-url'
    }
    await knexClient<User>('User').delete();
    await knexClient<User>('User').insert(testUser);

    /* Execute */
    const retrievedUser = await getUserById(testUser.userId!);

    /* Cleanup */
    await knexClient<User>('User').delete();

    /* Test */
    delete retrievedUser?.dtmCreated;
    expect(retrievedUser).toEqual(testUser);
  });
  it('if the user does not exist in the database, returns null', async () => {
    /* Setup */
    const testUser: User = {
      userId: 'fc72363c-4d5e-4884-9241-545e911049e8',
      email: 'some@email.com',
      handle: 'some-handle',
      password: 'some-password',
      name: 'Some Name',
      avatarSrc: 'some-url'
    }
    await knexClient<User>('User').delete();

    /* Execute */
    const retrievedUser = await getUserById(testUser.userId!);

    /* Test */
    expect(retrievedUser).toStrictEqual(null);
  });
});

describe('getUserByEmail(email)', () => {
  it('if the corresponding user exists in the database, returns user', async () => {
    /* Setup */
    const testUser: User = {
      userId: 'fc72363c-4d5e-4884-9241-545e911049e8',
      email: 'some@email.com',
      handle: 'some-handle',
      password: 'some-password',
      name: 'Some Name',
      avatarSrc: 'some-url'
    }
    await knexClient<User>('User').delete();
    await knexClient<User>('User').insert(testUser);

    /* Execute */
    const retrievedUser = await getUserByEmail(testUser.email!);

    /* Cleanup */
    await knexClient<User>('User').delete();

    /* Test */
    delete retrievedUser?.dtmCreated;
    expect(retrievedUser).toEqual(testUser);
  });
  it('if the user does not exist in the database, returns null', async () => {
    /* Setup */
    const testUser: User = {
      userId: 'fc72363c-4d5e-4884-9241-545e911049e8',
      email: 'some@email.com',
      handle: 'some-handle',
      password: 'some-password',
      name: 'Some Name',
      avatarSrc: 'some-url'
    }
    await knexClient<User>('User').delete();

    /* Execute */
    const retrievedUser = await getUserByEmail(testUser.email!);

    /* Test */
    expect(retrievedUser).toStrictEqual(null);
  });
});

describe('addNewUser(user)', () => {
  it('adds the user to the database', async () => {
    /* Setup */
    const testUser: User = {
      userId: 'fc72363c-4d5e-4884-9241-545e911049e8',
      email: 'some@email.com',
      handle: 'some-handle',
      password: 'some-password',
      name: 'Some Name',
      avatarSrc: 'some-url'
    }
    await knexClient<User>('User').delete();

    /* Execute */
    const queryResult = await knexClient<User>('User').insert(testUser).returning(Object.keys(testUser));
    const insertedUser = queryResult[0];

    /* Cleanup */
    await knexClient<User>('User').delete();

    /* Test */
    expect(insertedUser).toEqual(testUser);
  });
});