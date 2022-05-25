
import { v4 as uuid } from 'uuid';
import Chat from '@src/database/schemas/Chat';
import knexClient from '@src/database/client';
import { getAllChatsWithIds } from './chats.service';

describe('getAllChatsWithIds(chatIds)', () => {
  it('returns all chats corresponding to the specified chatIds', async () => {
    /* Setup */
    const testChats: Chat[] = (
      Array(2).fill(null)
        .map((_, i) => ({
          chatId: uuid(),
          name: `testChats[${i}]`,
          type: 'direct'
        }))
    );
    const otherChats: Chat[] = (
      Array(2).fill(null)
        .map((_, i) => ({
          chatId: uuid(),
          name: `otherChats[${i}]`,
          type: 'direct'
        }))
    );
    await knexClient<Chat>('Chat').insert([...testChats, ...otherChats]);

    /* Execute */
    const testChatIds = testChats.map(chat => chat.chatId);
    const matchingChats = await getAllChatsWithIds(testChatIds);

    /* Cleanup */
    await knexClient<Chat>('Chat').delete();

    /* Test */
    matchingChats.forEach(record => {
      delete record.dtmCreated;
      delete record.avatarSrc;
    });
    const comparator = (a: Chat, b: Chat) => a.chatId.localeCompare(b.chatId);
    const sortedResult = matchingChats.sort(comparator);
    const sortedExpected = testChats.sort(comparator);
    expect(sortedResult).toEqual(sortedExpected);
  });
  it('returns [] if there are no such chats', async () => {
    /* Setup */
    const testChats: Chat[] = (
      Array(2).fill(null)
        .map((_, i) => ({
          chatId: uuid(),
          name: `testChats[${i}]`,
          type: 'direct'
        }))
    );

    /* Execute */
    const testChatIds = testChats.map(chat => chat.chatId);
    const matchingChats = await getAllChatsWithIds(testChatIds);

    /* Test */
    expect(matchingChats).toEqual([]);
  });
});