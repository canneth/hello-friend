
import knexClient from '@src/database/client';
import User from '@root/src/database/schemas/User';

export async function getUser(userId: User['userId']) {
  const queryResult = await (
    knexClient<User>('User')
      .select('*')
      .where('userId', userId)
  );
  return queryResult[0];
}