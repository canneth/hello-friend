
import User from '@src/database/schemas/User';
import knexClient from '@src/database/client';
import { getUserByEmail, getUserById } from './users.service';

describe('getUserById(user)', () => {
  it('if the corresponding user exists in the database, returns the user', async () => {
    /* Setup */
    const testUser: Partial<User> = {
      userId: 'fc72363c-4d5e-4884-9241-545e911049e8',
      email: 'some@email.com',
      handle: 'some-handle',
      password: 'some-password',
      name: 'Some Name',
      avatarSrc: 'some-url'
    }
    await knexClient<User>('User').delete().where('userId', testUser.userId);
    await knexClient<User>('User').insert(testUser);

    /* Execute */
    const retrievedUser = await getUserById(testUser.userId!);
    delete retrievedUser?.dtmCreated;

    /* Cleanup */
    await knexClient<User>('User').delete().where('userId', testUser.userId);

    /* Test */
    expect(retrievedUser).toEqual(testUser);
  });
  it('if the user does not exist in the database, returns null', async () => {
    /* Setup */
    const testUser: Partial<User> = {
      userId: 'fc72363c-4d5e-4884-9241-545e911049e8',
      email: 'some@email.com',
      handle: 'some-handle',
      password: 'some-password',
      name: 'Some Name',
      avatarSrc: 'some-url'
    }
    await knexClient<User>('User').delete().where('userId', testUser.userId);

    /* Execute */
    const retrievedUser = await getUserById(testUser.userId!);

    /* Test */
    expect(retrievedUser).toStrictEqual(null);
  });
});

describe('getUserByEmail(email)', () => {
  it('if the corresponding user exists in the database, returns user', async () => {
    /* Setup */
    const testUser: Partial<User> = {
      userId: 'fc72363c-4d5e-4884-9241-545e911049e8',
      email: 'some@email.com',
      handle: 'some-handle',
      password: 'some-password',
      name: 'Some Name',
      avatarSrc: 'some-url'
    }
    await knexClient<User>('User').delete().where('userId', testUser.userId);
    await knexClient<User>('User').insert(testUser);

    /* Execute */
    const retrievedUser = await getUserByEmail(testUser.email!);
    delete retrievedUser?.dtmCreated;

    /* Cleanup */
    await knexClient<User>('User').delete().where('userId', testUser.userId);

    /* Test */
    expect(retrievedUser).toEqual(testUser);
  });
  it('if the user does not exist in the database, returns null', async () => {
    /* Setup */
    const testUser: Partial<User> = {
      userId: 'fc72363c-4d5e-4884-9241-545e911049e8',
      email: 'some@email.com',
      handle: 'some-handle',
      password: 'some-password',
      name: 'Some Name',
      avatarSrc: 'some-url'
    }
    await knexClient<User>('User').delete().where('userId', testUser.userId);

    /* Execute */
    const retrievedUser = await getUserByEmail(testUser.email!);

    /* Test */
    expect(retrievedUser).toStrictEqual(null);
  });
});

describe('addNewUser(user)', () => {
  it('adds the user to the database', async () => {
    /* Setup */
    const testUser: Partial<User> = {
      userId: 'fc72363c-4d5e-4884-9241-545e911049e8',
      email: 'some@email.com',
      handle: 'some-handle',
      password: 'some-password',
      name: 'Some Name',
      avatarSrc: 'some-url'
    }
    await knexClient<User>('User').delete().where('userId', testUser.userId);

    /* Execute */
    const queryResult = await knexClient<User>('User').insert(testUser).returning(Object.keys(testUser));
    const insertedUser = queryResult[0];

    /* Cleanup */
    await knexClient<User>('User').delete().where('userId', testUser.userId);

    /* Test */
    expect(insertedUser).toEqual(testUser);
  });
});