
import ChatMessage from '@src/database/schemas/ChatMessage';
import knexClient from '@src/database/client';
import Chat from '@src/database/schemas/Chat';

export async function getChatMessagesInChat(chatId: Chat['chatId'], latest?: boolean) {
  const queryResult = await (
    knexClient<ChatMessage>('ChatMessage')
      .select('*')
      .where('chatId', chatId)
      .orderBy('dtmPosted', 'desc')
  );
  if (latest) return [queryResult[0]];
  return queryResult;
}

export async function getAllChatMessagesInChats(chatIds: Chat['chatId'][], latest?: boolean) {
  if (latest) {
    const queryResult = await (
      knexClient<ChatMessage>('ChatMessage')
        .select('*').distinctOn('chatId')
        .whereIn('chatId', chatIds)
        .orderBy(['chatId', { column: 'dtmPosted', order: 'desc' }])
    );
    return queryResult;
  }

  const queryResult = await (
    knexClient<ChatMessage>('ChatMessage')
      .select('*')
      .whereIn('chatId', chatIds)
      .orderBy('dtmPosted', 'desc')
  );
  return queryResult;
}