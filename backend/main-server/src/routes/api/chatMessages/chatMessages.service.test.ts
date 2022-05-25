
import { v4 as uuid } from 'uuid';
import ChatMessage from '@src/database/schemas/ChatMessage';
import Chat from '@src/database/schemas/Chat';
import User from '@src/database/schemas/User';
import emptyDatabase from '@src/database/utils/emptyDatabase';
import knexClient from '@src/database/client';
import ChatMembership from '@src/database/schemas/ChatMembership';
import { getAllChatMessagesInChats, getChatMessagesInChat } from './chatMessages.service';

beforeAll(async () => {
  await emptyDatabase();
});

describe('getChatMessagesInChat(chatId, latest?)', () => {
  describe('if latest is undefined', () => {
    it('returns all chat messages in the chat corresponding only to chatId', async () => {
      /* Setup */
      const testUser: User = {
        userId: 'fc72363c-4d5e-4884-9241-545e911049e8',
        email: 'testUser@email.com',
        handle: 'testUser',
        password: 'testUser-password',
        name: 'testUser-name',
        avatarSrc: 'testUser-avatarSrc'
      };

      const testChat: Chat = {
        chatId: '2ecf4bdc-9ea2-47d0-a98d-14558efe223c',
        name: 'testChat',
        type: 'direct'
      };
      const unrelatedChat: Chat = {
        chatId: 'b900a4b3-1f38-4145-8b00-e6f4795a018b',
        name: 'unrelatedChat',
        type: 'direct'
      };

      const testChatMembership: ChatMembership = {
        userId: testUser.userId,
        chatId: testChat.chatId,
        chatMembershipId: '49031a31-65a7-49fe-a9e4-723c9516b27e'
      };
      const unrelatedChatMembership: ChatMembership = {
        userId: testUser.userId,
        chatId: unrelatedChat.chatId,
        chatMembershipId: '2fa285e7-3470-4bc5-88cc-2b422dcf8f33'
      };

      const testChatMessages: ChatMessage[] = [
        {
          chatMessageId: '8ab93075-0f90-4210-914e-5de1ec510d5a',
          userId: testUser.userId,
          chatId: testChat.chatId,
          content: 'I am testChatMessages[0]!'
        },
        {
          chatMessageId: 'bbb8789d-b9c9-4be5-b10c-fadfd22258d6',
          userId: testUser.userId,
          chatId: testChat.chatId,
          content: 'I am testChatMessages[1]!'
        },
        {
          chatMessageId: '31154143-8a76-48c0-9586-1dd91e5a1884',
          userId: testUser.userId,
          chatId: testChat.chatId,
          content: 'I am testChatMessages[2]!'
        }
      ];
      const unrelatedChatMessages: ChatMessage[] = [
        {
          chatMessageId: 'bc56e04b-9afd-457a-b4de-f6519d9c17ad',
          userId: testUser.userId,
          chatId: unrelatedChat.chatId,
          content: 'I am unrelatedChatMessages[0]!'
        },
        {
          chatMessageId: '63c44bb0-4f1b-491f-b69f-65b1dac8467d',
          userId: testUser.userId,
          chatId: unrelatedChat.chatId,
          content: 'I am unrelatedChatMessages[1]!'
        },
        {
          chatMessageId: '6a3c35d9-97df-4258-a209-4cbf5bdb0507',
          userId: testUser.userId,
          chatId: unrelatedChat.chatId,
          content: 'I am unrelatedChatMessages[2]!'
        }
      ];
      await knexClient<User>('User').insert(testUser);
      await knexClient<Chat>('Chat').insert([testChat, unrelatedChat]);
      await knexClient<ChatMembership>('ChatMembership').insert([testChatMembership, unrelatedChatMembership]);
      await knexClient<ChatMessage>('ChatMessage').insert([...testChatMessages, ...unrelatedChatMessages]);

      /* Execute */
      const chatMessages = await getChatMessagesInChat(testChat.chatId);

      /* Cleanup */
      await knexClient<ChatMessage>('ChatMessage').delete();
      await knexClient<ChatMembership>('ChatMembership').delete();
      await knexClient<Chat>('Chat').delete();
      await knexClient<User>('User').delete();

      /* Test */
      chatMessages.forEach(record => delete record.dtmPosted);
      const comparator = (a: ChatMessage, b: ChatMessage) => a.chatMessageId.localeCompare(b.chatMessageId);
      const sortedResult = chatMessages.sort(comparator);
      const sortedExpected = testChatMessages.sort(comparator);
      expect(sortedResult).toEqual(sortedExpected);
    });
    it('returns [] if the corresponding chat has no messages', async () => {
      /* Setup */
      const testUser: User = {
        userId: 'fc72363c-4d5e-4884-9241-545e911049e8',
        email: 'testUser@email.com',
        handle: 'testUser',
        password: 'testUser-password',
        name: 'testUser-name',
        avatarSrc: 'testUser-avatarSrc'
      };
      const testChat: Chat = {
        chatId: '2ecf4bdc-9ea2-47d0-a98d-14558efe223c',
        name: 'testChat',
        type: 'direct'
      };
      const unrelatedChat: Chat = {
        chatId: 'b900a4b3-1f38-4145-8b00-e6f4795a018b',
        name: 'unrelatedChat',
        type: 'direct'
      };
      const unrelatedChatMembership: ChatMembership = {
        userId: testUser.userId,
        chatId: unrelatedChat.chatId,
        chatMembershipId: '2fa285e7-3470-4bc5-88cc-2b422dcf8f33'
      };
      const unrelatedChatMessage: ChatMessage = {
        chatMessageId: 'bc56e04b-9afd-457a-b4de-f6519d9c17ad',
        userId: testUser.userId,
        chatId: unrelatedChat.chatId,
        content: 'I am unrelatedChatMessages[0]!'
      };
      await knexClient<User>('User').insert(testUser);
      await knexClient<Chat>('Chat').insert([testChat, unrelatedChat]);
      await knexClient<ChatMembership>('ChatMembership').insert(unrelatedChatMembership);
      await knexClient<ChatMessage>('ChatMessage').insert(unrelatedChatMessage);

      /* Execute */
      const chatMessages = await getChatMessagesInChat(testChat.chatId);

      /* Cleanup */
      await knexClient<ChatMessage>('ChatMessage').delete();
      await knexClient<ChatMembership>('ChatMembership').delete();
      await knexClient<Chat>('Chat').delete();
      await knexClient<User>('User').delete();

      /* Test */
      expect(chatMessages).toEqual([]);
    });
  });
  describe('if latest is defined', () => {
    it('returns an array of length 1 containing the latest chat message in the chat corresponding to chatId', async () => {
      /* Setup */
      const testUser: User = {
        userId: 'fc72363c-4d5e-4884-9241-545e911049e8',
        email: 'testUser@email.com',
        handle: 'testUser',
        password: 'testUser-password',
        name: 'testUser-name',
        avatarSrc: 'testUser-avatarSrc'
      };

      const testChat: Chat = {
        chatId: '2ecf4bdc-9ea2-47d0-a98d-14558efe223c',
        name: 'testChat',
        type: 'direct'
      };
      const unrelatedChat: Chat = {
        chatId: 'b900a4b3-1f38-4145-8b00-e6f4795a018b',
        name: 'unrelatedChat',
        type: 'direct'
      };

      const testChatMembership: ChatMembership = {
        userId: testUser.userId,
        chatId: testChat.chatId,
        chatMembershipId: '49031a31-65a7-49fe-a9e4-723c9516b27e'
      };
      const unrelatedChatMembership: ChatMembership = {
        userId: testUser.userId,
        chatId: unrelatedChat.chatId,
        chatMembershipId: '2fa285e7-3470-4bc5-88cc-2b422dcf8f33'
      };

      const testChatMessages: ChatMessage[] = [
        {
          chatMessageId: '8ab93075-0f90-4210-914e-5de1ec510d5a',
          userId: testUser.userId,
          chatId: testChat.chatId,
          content: 'I am testChatMessages[0]!'
        },
        {
          chatMessageId: 'bbb8789d-b9c9-4be5-b10c-fadfd22258d6',
          userId: testUser.userId,
          chatId: testChat.chatId,
          content: 'I am testChatMessages[1]!'
        },
        {
          chatMessageId: '31154143-8a76-48c0-9586-1dd91e5a1884',
          userId: testUser.userId,
          chatId: testChat.chatId,
          content: 'I am testChatMessages[2]!'
        }
      ];
      const unrelatedChatMessages: ChatMessage[] = [
        {
          chatMessageId: 'bc56e04b-9afd-457a-b4de-f6519d9c17ad',
          userId: testUser.userId,
          chatId: unrelatedChat.chatId,
          content: 'I am unrelatedChatMessages[0]!'
        },
        {
          chatMessageId: '63c44bb0-4f1b-491f-b69f-65b1dac8467d',
          userId: testUser.userId,
          chatId: unrelatedChat.chatId,
          content: 'I am unrelatedChatMessages[1]!'
        },
        {
          chatMessageId: '6a3c35d9-97df-4258-a209-4cbf5bdb0507',
          userId: testUser.userId,
          chatId: unrelatedChat.chatId,
          content: 'I am unrelatedChatMessages[2]!'
        }
      ];
      await knexClient<User>('User').insert(testUser);
      await knexClient<Chat>('Chat').insert([testChat, unrelatedChat]);
      await knexClient<ChatMembership>('ChatMembership').insert([testChatMembership, unrelatedChatMembership]);
      for (const message of [...testChatMessages, ...unrelatedChatMessages]) {
        await knexClient<ChatMessage>('ChatMessage').insert(message);
        await knexClient.raw('SELECT pg_sleep(0.001)');
      }

      /* Execute */
      const chatMessages = await getChatMessagesInChat(testChat.chatId, true);

      /* Cleanup */
      await knexClient<ChatMessage>('ChatMessage').delete();
      await knexClient<ChatMembership>('ChatMembership').delete();
      await knexClient<Chat>('Chat').delete();
      await knexClient<User>('User').delete();

      /* Test */
      chatMessages.forEach(record => delete record.dtmPosted);
      expect(chatMessages).toHaveLength(1);
      expect(chatMessages[0]).toEqual(testChatMessages[testChatMessages.length - 1]);
    });
    it('returns [] if the corresponding chat has no messages', async () => {
      /* Setup */
      const testUser: User = {
        userId: 'fc72363c-4d5e-4884-9241-545e911049e8',
        email: 'testUser@email.com',
        handle: 'testUser',
        password: 'testUser-password',
        name: 'testUser-name',
        avatarSrc: 'testUser-avatarSrc'
      };
      const testChat: Chat = {
        chatId: '2ecf4bdc-9ea2-47d0-a98d-14558efe223c',
        name: 'testChat',
        type: 'direct'
      };
      const unrelatedChat: Chat = {
        chatId: 'b900a4b3-1f38-4145-8b00-e6f4795a018b',
        name: 'unrelatedChat',
        type: 'direct'
      };
      const unrelatedChatMembership: ChatMembership = {
        userId: testUser.userId,
        chatId: unrelatedChat.chatId,
        chatMembershipId: '2fa285e7-3470-4bc5-88cc-2b422dcf8f33'
      };
      const unrelatedChatMessage: ChatMessage = {
        chatMessageId: 'bc56e04b-9afd-457a-b4de-f6519d9c17ad',
        userId: testUser.userId,
        chatId: unrelatedChat.chatId,
        content: 'I am unrelatedChatMessages[0]!'
      };
      await knexClient<User>('User').insert(testUser);
      await knexClient<Chat>('Chat').insert([testChat, unrelatedChat]);
      await knexClient<ChatMembership>('ChatMembership').insert(unrelatedChatMembership);
      await knexClient<ChatMessage>('ChatMessage').insert(unrelatedChatMessage);

      /* Execute */
      const chatMessages = await getChatMessagesInChat(testChat.chatId, true);

      /* Cleanup */
      await knexClient<ChatMessage>('ChatMessage').delete();
      await knexClient<ChatMembership>('ChatMembership').delete();
      await knexClient<Chat>('Chat').delete();
      await knexClient<User>('User').delete();

      /* Test */
      expect(chatMessages).toEqual([]);
    });
  });
});

describe('getAllChatMessagesInChats(chatIds, latest?)', () => {
  describe('if latest is undefined', () => {
    it('returns all chat messages in chats corresponding to all listed chatIds', async () => {
      /* Setup */
      const testUser: User = {
        userId: uuid(),
        email: 'testUser@email.com',
        handle: 'testUser',
        password: 'testUser-password',
        name: 'testUser-name',
        avatarSrc: 'testUser-avatarSrc'
      };

      const testChats: Chat[] = (
        Array(2).fill(null)
          .map((_, i) => ({
            chatId: uuid(),
            name: `testChats[${i}]`,
            type: 'direct'
          }))
      );
      const unrelatedChats: Chat[] = (
        Array(2).fill(null)
          .map((_, i) => ({
            chatId: uuid(),
            name: `unrelatedChats[${i}]`,
            type: 'direct'
          }))
      );

      const testChatMemberships: ChatMembership[] = (
        Array(testChats.length).fill(null)
          .map((_, i) => ({
            userId: testUser.userId,
            chatId: testChats[i].chatId,
            chatMembershipId: uuid()
          }))
      );
      const unrelatedChatMemberships: ChatMembership[] = (
        Array(unrelatedChats.length).fill(null)
          .map((_, i) => ({
            userId: testUser.userId,
            chatId: unrelatedChats[i].chatId,
            chatMembershipId: uuid()
          }))
      );

      const testChatMessages: ChatMessage[] = [];
      for (let i = 0; i < testChats.length; i++) {
        for (let j = 0; j < 3; j++) {
          testChatMessages.push({
            chatMessageId: uuid(),
            userId: testUser.userId,
            chatId: testChats[i].chatId,
            content: `I am testChatMessage #${j} in chat #${i}!`
          });
        }
      }
      const unrelatedChatMessages: ChatMessage[] = [];
      for (let i = 0; i < testChats.length; i++) {
        for (let j = 0; j < 3; j++) {
          unrelatedChatMessages.push({
            chatMessageId: uuid(),
            userId: testUser.userId,
            chatId: unrelatedChats[i].chatId,
            content: `I am unrelatedChatMessage #${j} in chat #${i}!`
          });
        }
      }
      await knexClient<User>('User').insert(testUser);
      await knexClient<Chat>('Chat').insert([...testChats, ...unrelatedChats]);
      await knexClient<ChatMembership>('ChatMembership').insert([...testChatMemberships, ...unrelatedChatMemberships]);
      await knexClient<ChatMessage>('ChatMessage').insert([...testChatMessages, ...unrelatedChatMessages]);

      /* Execute */
      const chatIds = testChats.map(chat => chat.chatId);
      const chatMessages = await getAllChatMessagesInChats(chatIds);

      /* Cleanup */
      await knexClient<ChatMessage>('ChatMessage').delete();
      await knexClient<ChatMembership>('ChatMembership').delete();
      await knexClient<Chat>('Chat').delete();
      await knexClient<User>('User').delete();

      /* Test */
      chatMessages.forEach(record => delete record.dtmPosted);
      const comparator = (a: ChatMessage, b: ChatMessage) => a.chatMessageId.localeCompare(b.chatMessageId);
      const sortedResult = chatMessages.sort(comparator);
      const sortedExpected = testChatMessages.sort(comparator);
      expect(sortedResult).toEqual(sortedExpected);
    });
    it('returns [] if all of the corresponding chats have no messages', async () => {
      /* Setup */
      const testUser: User = {
        userId: uuid(),
        email: 'testUser@email.com',
        handle: 'testUser',
        password: 'testUser-password',
        name: 'testUser-name',
        avatarSrc: 'testUser-avatarSrc'
      };

      const testChats: Chat[] = (
        Array(2).fill(null)
          .map((_, i) => ({
            chatId: uuid(),
            name: `testChats[${i}]`,
            type: 'direct'
          }))
      );
      const unrelatedChats: Chat[] = (
        Array(2).fill(null)
          .map((_, i) => ({
            chatId: uuid(),
            name: `unrelatedChats[${i}]`,
            type: 'direct'
          }))
      );

      const unrelatedChatMemberships: ChatMembership[] = (
        Array(unrelatedChats.length).fill(null)
          .map((_, i) => ({
            userId: testUser.userId,
            chatId: unrelatedChats[i].chatId,
            chatMembershipId: uuid()
          }))
      );

      const unrelatedChatMessages: ChatMessage[] = [];
      for (let i = 0; i < testChats.length; i++) {
        for (let j = 0; j < 3; j++) {
          unrelatedChatMessages.push({
            chatMessageId: uuid(),
            userId: testUser.userId,
            chatId: unrelatedChats[i].chatId,
            content: `I am unrelatedChatMessage #${j} in chat #${i}!`
          });
        }
      }
      await knexClient<User>('User').insert(testUser);
      await knexClient<Chat>('Chat').insert([...testChats, ...unrelatedChats]);
      await knexClient<ChatMembership>('ChatMembership').insert(unrelatedChatMemberships);
      await knexClient<ChatMessage>('ChatMessage').insert(unrelatedChatMessages);

      /* Execute */
      const chatIds = testChats.map(chat => chat.chatId);
      const chatMessages = await getAllChatMessagesInChats(chatIds);

      /* Cleanup */
      await knexClient<ChatMessage>('ChatMessage').delete();
      await knexClient<ChatMembership>('ChatMembership').delete();
      await knexClient<Chat>('Chat').delete();
      await knexClient<User>('User').delete();

      /* Test */
      expect(chatMessages).toEqual([]);
    });
  });
  describe('if latest is defined', () => {
    it('returns all latest chat messages in each of the chats corresponding to all listed chatIds', async () => {
      /* Setup */
      const testUser: User = {
        userId: uuid(),
        email: 'testUser@email.com',
        handle: 'testUser',
        password: 'testUser-password',
        name: 'testUser-name',
        avatarSrc: 'testUser-avatarSrc'
      };

      const testChats: Chat[] = (
        Array(2).fill(null)
          .map((_, i) => ({
            chatId: uuid(),
            name: `testChats[${i}]`,
            type: 'direct'
          }))
      );
      const unrelatedChats: Chat[] = (
        Array(2).fill(null)
          .map((_, i) => ({
            chatId: uuid(),
            name: `unrelatedChats[${i}]`,
            type: 'direct'
          }))
      );

      const testChatMemberships: ChatMembership[] = (
        Array(testChats.length).fill(null)
          .map((_, i) => ({
            userId: testUser.userId,
            chatId: testChats[i].chatId,
            chatMembershipId: uuid()
          }))
      );
      const unrelatedChatMemberships: ChatMembership[] = (
        Array(unrelatedChats.length).fill(null)
          .map((_, i) => ({
            userId: testUser.userId,
            chatId: unrelatedChats[i].chatId,
            chatMembershipId: uuid()
          }))
      );

      const testChatMessages: ChatMessage[] = [];
      for (let i = 0; i < testChats.length; i++) {
        for (let j = 0; j < 3; j++) {
          testChatMessages.push({
            chatMessageId: uuid(),
            userId: testUser.userId,
            chatId: testChats[i].chatId,
            content: `I am testChatMessage #${j} in chat #${i}!`
          });
        }
      }
      const unrelatedChatMessages: ChatMessage[] = [];
      for (let i = 0; i < testChats.length; i++) {
        for (let j = 0; j < 3; j++) {
          unrelatedChatMessages.push({
            chatMessageId: uuid(),
            userId: testUser.userId,
            chatId: unrelatedChats[i].chatId,
            content: `I am unrelatedChatMessage #${j} in chat #${i}!`
          });
        }
      }
      await knexClient<User>('User').insert(testUser);
      await knexClient<Chat>('Chat').insert([...testChats, ...unrelatedChats]);
      await knexClient<ChatMembership>('ChatMembership').insert([...testChatMemberships, ...unrelatedChatMemberships]);
      for (const message of [...testChatMessages, ...unrelatedChatMessages]) {
        await knexClient<ChatMessage>('ChatMessage').insert(message);
        await knexClient.raw('SELECT pg_sleep(0.001)');
      }

      /* Execute */
      const chatIds = testChats.map(chat => chat.chatId);
      const chatMessages = await getAllChatMessagesInChats(chatIds, true);

      /* Cleanup */
      await knexClient<ChatMessage>('ChatMessage').delete();
      await knexClient<ChatMembership>('ChatMembership').delete();
      await knexClient<Chat>('Chat').delete();
      await knexClient<User>('User').delete();

      /* Test */
      chatMessages.forEach(record => delete record.dtmPosted);
      const comparator = (a: ChatMessage, b: ChatMessage) => a.chatMessageId.localeCompare(b.chatMessageId);
      const sortedResult = chatMessages.sort(comparator);
      const sortedExpected = [testChatMessages[2], testChatMessages[5]].sort(comparator);
      expect(sortedResult).toEqual(sortedExpected);
    });
    it('returns [] if all of the corresponding chats have no messages', async () => {
      /* Setup */
      const testUser: User = {
        userId: uuid(),
        email: 'testUser@email.com',
        handle: 'testUser',
        password: 'testUser-password',
        name: 'testUser-name',
        avatarSrc: 'testUser-avatarSrc'
      };

      const testChats: Chat[] = (
        Array(2).fill(null)
          .map((_, i) => ({
            chatId: uuid(),
            name: `testChats[${i}]`,
            type: 'direct'
          }))
      );
      const unrelatedChats: Chat[] = (
        Array(2).fill(null)
          .map((_, i) => ({
            chatId: uuid(),
            name: `unrelatedChats[${i}]`,
            type: 'direct'
          }))
      );

      const unrelatedChatMemberships: ChatMembership[] = (
        Array(unrelatedChats.length).fill(null)
          .map((_, i) => ({
            userId: testUser.userId,
            chatId: unrelatedChats[i].chatId,
            chatMembershipId: uuid()
          }))
      );

      const unrelatedChatMessages: ChatMessage[] = [];
      for (let i = 0; i < testChats.length; i++) {
        for (let j = 0; j < 3; j++) {
          unrelatedChatMessages.push({
            chatMessageId: uuid(),
            userId: testUser.userId,
            chatId: unrelatedChats[i].chatId,
            content: `I am unrelatedChatMessage #${j} in chat #${i}!`
          });
        }
      }
      await knexClient<User>('User').insert(testUser);
      await knexClient<Chat>('Chat').insert([...testChats, ...unrelatedChats]);
      await knexClient<ChatMembership>('ChatMembership').insert(unrelatedChatMemberships);
      for (const message of unrelatedChatMessages) {
        await knexClient<ChatMessage>('ChatMessage').insert(message);
        await knexClient.raw('SELECT pg_sleep(0.001)');
      }

      /* Execute */
      const chatIds = testChats.map(chat => chat.chatId);
      const chatMessages = await getAllChatMessagesInChats(chatIds, true);

      /* Cleanup */
      await knexClient<ChatMessage>('ChatMessage').delete();
      await knexClient<ChatMembership>('ChatMembership').delete();
      await knexClient<Chat>('Chat').delete();
      await knexClient<User>('User').delete();

      /* Test */
      chatMessages.forEach(record => delete record.dtmPosted);
      expect(chatMessages).toEqual([]);
    });
  });
});