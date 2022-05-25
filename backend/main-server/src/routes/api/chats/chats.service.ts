
import knexClient from '@src/database/client';
import Chat from '@src/database/schemas/Chat';


export async function getAllChatsWithIds(chatIds: Chat['chatId'][]) {
  const queryResult = await (
    knexClient<Chat>('Chat')
      .select('*')
      .whereIn('chatId', chatIds)
  );
  return queryResult;
}