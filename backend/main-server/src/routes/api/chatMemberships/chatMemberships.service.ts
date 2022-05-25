
import ChatMembership from '@src/database/schemas/ChatMembership';
import knexClient from '@src/database/client';
import User from '@src/database/schemas/User';

export async function getAllChatMembershipsOfUsers(userIds: User['userId'][]) {
  const queryResult = await (
    knexClient<ChatMembership>('ChatMembership')
      .select('*')
      .whereIn('userId', userIds)
  );
  return queryResult;
}