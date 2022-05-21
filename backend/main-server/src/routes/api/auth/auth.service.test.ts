
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import knexClient from '@src/database/client';
import { decodeAccessToken, generateAccessToken, verifyCredentials } from './auth.service';
import User from '@src/database/schemas/User';


describe('generateAccessToken(userId)', () => {
  it('returns a JWT whose payload contains userId', () => {
    /* Setup */
    const userId = 'someUserId';

    /* Execute */
    const generatedToken = generateAccessToken(userId);

    /* Test */
    const decodedPayload = jwt.verify(generatedToken, process.env.ACCESS_TOKEN_SECRET!);
    expect(decodedPayload).toHaveProperty('userId', userId);
  });
});

describe('decodeAccessToken(accessToken)', () => {
  it('returns the decoded payload of the accessToken', () => {
    /* Setup */
    const testPayload = {
      someString: 'someVal',
      someNum: 5
    };
    const accessToken = jwt.sign(testPayload, process.env.ACCESS_TOKEN_SECRET!);

    /* Execute */
    const decodedPayload = decodeAccessToken(accessToken);

    /* Test */
    expect(decodedPayload).toMatchObject(testPayload);
  });
});

describe('verifyCredentials(email, password)', () => {
  it('returns true if a user with that email exists, and the password is correct', async () => {
    /* Setup */
    const email = 'some@email.com';
    const plainTextPassword = 'plain-text-password';
    const testUser: Partial<User> = {
      userId: 'fc72363c-4d5e-4884-9241-545e911049e8',
      email,
      handle: 'some-handle',
      password: await bcrypt.hash(plainTextPassword, 10),
      name: 'Some Name',
      avatarSrc: 'some-url'
    }
    await knexClient<User>('User').delete().where(testUser);
    await knexClient<User>('User').insert(testUser);

    /* Execute */
    const verificationPassed = await verifyCredentials(email, plainTextPassword);

    /* Cleanup */
    await knexClient<User>('User').delete().where(testUser);

    /* Test */
    expect(verificationPassed).toBe(true);
  });
  it('returns false if a user with that email does not exist in the database', async () => {
    /* Setup */
    const email = 'some@email.com';
    const plainTextPassword = 'plain-text-password';
    const testUser: Partial<User> = {
      userId: 'fc72363c-4d5e-4884-9241-545e911049e8',
      email,
      handle: 'some-handle',
      password: await bcrypt.hash(plainTextPassword, 10),
      name: 'Some Name',
      avatarSrc: 'some-url'
    }
    await knexClient<User>('User').delete().where(testUser);

    /* Execute */
    const verificationPassed = await verifyCredentials(email, plainTextPassword);

    /* Test */
    expect(verificationPassed).toBe(false);
  });
  it('returns false if a user with that email exists, but password is incorrect', async () => {
    /* Setup */
    const email = 'some@email.com';
    const plainTextPassword = 'plain-text-password';
    const testUser: Partial<User> = {
      userId: 'fc72363c-4d5e-4884-9241-545e911049e8',
      email,
      handle: 'some-handle',
      password: await bcrypt.hash(plainTextPassword, 10),
      name: 'Some Name',
      avatarSrc: 'some-url'
    }
    await knexClient<User>('User').delete().where(testUser);
    await knexClient<User>('User').insert(testUser);

    /* Execute */
    const verificationPassed = await verifyCredentials(email, 'wrong-password');

    /* Cleanup */
    await knexClient<User>('User').delete().where(testUser);

    /* Test */
    expect(verificationPassed).toBe(false);
  });
});