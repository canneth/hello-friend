
import { v4 as uuid } from 'uuid';
import knexClient from '@src/database/client';
import User from '@src/database/schemas/User';


export async function getUserById(userId: User['userId']) {
  const queryResult = await knexClient<User>('User').select('*').where('userId', userId);
  const user = queryResult.length > 0 ? queryResult[0] : null;
  return user;
}

export async function getUserByEmail(email: User['email']) {
  const queryResult = await knexClient<User>('User').select('*').where('email', email);
  const user = queryResult.length > 0 ? queryResult[0] : null;
  return user;
}

export async function getAllMatchingUsers(userIds?: User['userId'][], returnFields?: (keyof User)[]) {
  if (!userIds) {
    const queryResult: Partial<User>[] = await knexClient<User>('User').select(returnFields ?? '*');
    return queryResult;
  }
  const queryResult: Partial<User>[] = await knexClient<User>('User').select(returnFields ?? '*').whereIn('userId', userIds);
  return queryResult;
}

export async function addNewUser(user: Partial<User> & { email: User['email'], password: User['password'] }) {
  const userToAdd: User = {
    userId: user.userId ?? uuid(),
    email: user.email,
    handle: user.handle ?? user.email.split('@')[0],
    password: user.password,
    name: user.name ?? user.email.split('@')[0],
    avatarSrc: user.avatarSrc
  }
  await knexClient<User>('User').insert(userToAdd);
}