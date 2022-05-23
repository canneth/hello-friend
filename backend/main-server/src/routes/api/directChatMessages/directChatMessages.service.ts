
import knexClient from '@src/database/client';
import User from '@src/database/schemas/User';
import DirectChatMessage from '@src/database/schemas/DirectChatMessage';

export async function getAllDirectChatMessagesSentBy(senderUserId: User['userId']) {
  const queryResult = await knexClient<DirectChatMessage>('DirectChatMessage').select('*').where('senderUserId', senderUserId).orderBy('dtmPosted', 'desc');
  return queryResult;
}
export async function getAllDirectChatMessagesReceivedBy(receiverUserId: User['userId']) {
  const queryResult = await knexClient<DirectChatMessage>('DirectChatMessage').select('*').where('receiverUserId', receiverUserId).orderBy('dtmPosted', 'desc');
  return queryResult;
}

export async function getAllDirectChatMessagesBetweenUsers(senderUserId: User['userId'], receiverUserId: User['userId']) {
  const queryResult = await knexClient<DirectChatMessage>('DirectChatMessage').select('*').where('senderUserId', senderUserId).and.where('receiverUserId', receiverUserId).orderBy('dtmPosted', 'desc');
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
  const senderUserIds = new Set<User['userId']>();
  const receiverUserIds = new Set<User['userId']>();
  const result = queryResult.filter(message => {
    if (senderUserIds.has(message.receiverUserId) || receiverUserIds.has(message.senderUserId)) return false;
    senderUserIds.add(message.senderUserId);
    receiverUserIds.add(message.receiverUserId);
    return true;
  });
  return result;
}