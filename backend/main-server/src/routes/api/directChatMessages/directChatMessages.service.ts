
import knexClient from '@src/database/client';
import User from '@src/database/schemas/User';
import DirectChatMessage from '@src/database/schemas/DirectChatMessage';

export async function getAllDirectChatMessagesBetweenUsers(userOneId: User['userId'], userTwoId: User['userId']) {
  const queryResult = await (
    knexClient<DirectChatMessage>('DirectChatMessage')
      .select('*')
      .where('senderUserId', userOneId).and.where('receiverUserId', userTwoId)
      .or.where('senderUserId', userTwoId).and.where('receiverUserId', userOneId)
      .orderBy('dtmPosted', 'desc')
  );
  return queryResult;
}

export async function getDirectChatMessagesInvolvingUser(userId: User['userId']) {
  const queryResult = await knexClient<DirectChatMessage>('DirectChatMessage').select('*').where('senderUserId', userId).or.where('receiverUserId', userId).orderBy('dtmPosted', 'desc');
  return queryResult;
}

export async function getLatestDirectChatMessagesInvolvingUser(userId: User['userId']) {
  const queryResult = await (
    knexClient<DirectChatMessage>('DirectChatMessage')
      .select('*').distinctOn('senderUserId', 'receiverUserId')
      .where('senderUserId', userId).or.where('receiverUserId', userId)
      .orderBy(['senderUserId', 'receiverUserId'])
      .orderBy('dtmPosted', 'desc')
  );
  const userIdPairs = new Set<string>();
  const result = queryResult.filter(message => {
    if (userIdPairs.has(`${message.senderUserId}|${message.receiverUserId}`)) return false;
    userIdPairs.add(`${message.senderUserId}|${message.receiverUserId}`);
    userIdPairs.add(`${message.receiverUserId}|${message.senderUserId}`);
    return true;
  });
  return result;
}