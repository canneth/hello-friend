
import ChatMessage from '@src/database/schemas/ChatMessage';
import knexClient from '@src/database/client';
import Chat from '@src/database/schemas/Chat';

export async function getChatMessagesInChat(chatId: Chat['chatId'], latest?: boolean) {
  const queryResult = await (
    knexClient<ChatMessage>('ChatMessage').select('*')
      .where('chatId', chatId)
      .orderBy('dtmPosted', 'desc')
  );
  if (latest) return [queryResult[0]];
  return queryResult;
}