
import { v4 as uuid } from 'uuid';
import User from '@src/database/schemas/User';
import Chat from '@src/database/schemas/Chat';
import ChatMembership from '@src/database/schemas/ChatMembership';
import knexClient from '@src/database/client';
import { getAllChatMembershipsOfUsers, getAllChatMembershipsWithIds } from './chatMemberships.service';
import emptyDatabase from '@src/database/utils/emptyDatabase';

beforeAll(async () => {
  await emptyDatabase();
});

describe('getAllChatMembershipsOfUsers(userIds)', () => {
  it('returns all chat memberships of the specified user', async () => {
    /* Setup */
    const testUser: User = {
      userId: uuid(),
      email: 'testUser@email.com',
      handle: 'testUser',
      password: 'testUser-password',
      name: 'testUser-name',
      avatarSrc: 'testUser-avatarSrc'
    };
    const otherUser: User = {
      userId: uuid(),
      email: 'otherUser@email.com',
      handle: 'otherUser',
      password: 'otherUser-password',
      name: 'otherUser-name',
      avatarSrc: 'otherUser-avatarSrc'
    };

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

    const testChatMemberships: ChatMembership[] = (
      Array(testChats.length).fill(null)
        .map((_, i) => ({
          userId: testUser.userId,
          chatId: testChats[i].chatId,
          chatMembershipId: uuid()
        }))
    );
    const unrelatedChatMemberships: ChatMembership[] = (
      Array(otherChats.length).fill(null)
        .map((_, i) => ({
          userId: otherUser.userId,
          chatId: otherChats[i].chatId,
          chatMembershipId: uuid()
        }))
    );
    await knexClient<User>('User').insert([testUser, otherUser]);
    await knexClient<Chat>('Chat').insert([...testChats, ...otherChats]);
    await knexClient<ChatMembership>('ChatMembership').insert([...testChatMemberships, ...unrelatedChatMemberships]);

    /* Execute */
    const matchingChatMemberships = await getAllChatMembershipsOfUsers([testUser.userId]);

    /* Cleanup */
    await knexClient<ChatMembership>('ChatMembership').delete();
    await knexClient<Chat>('Chat').delete();
    await knexClient<User>('User').delete();

    /* Test */
    matchingChatMemberships.forEach(record => delete record.dtmJoined);
    const comparator = (a: ChatMembership, b: ChatMembership) => a.chatMembershipId.localeCompare(b.chatMembershipId);
    const sortedResult = matchingChatMemberships.sort(comparator);
    const sortedExpected = testChatMemberships.sort(comparator);
    expect(sortedResult).toEqual(sortedExpected);
  });
  it('returns [] if the specified user has no chat memberships', async () => {
    /* Setup */
    const testUser: User = {
      userId: uuid(),
      email: 'testUser@email.com',
      handle: 'testUser',
      password: 'testUser-password',
      name: 'testUser-name',
      avatarSrc: 'testUser-avatarSrc'
    };
    const otherUser: User = {
      userId: uuid(),
      email: 'otherUser@email.com',
      handle: 'otherUser',
      password: 'otherUser-password',
      name: 'otherUser-name',
      avatarSrc: 'otherUser-avatarSrc'
    };
    const otherChats: Chat[] = (
      Array(2).fill(null)
        .map((_, i) => ({
          chatId: uuid(),
          name: `otherChats[${i}]`,
          type: 'direct'
        }))
    );
    const unrelatedChatMemberships: ChatMembership[] = (
      Array(otherChats.length).fill(null)
        .map((_, i) => ({
          userId: otherUser.userId,
          chatId: otherChats[i].chatId,
          chatMembershipId: uuid()
        }))
    );
    await knexClient<User>('User').insert([testUser, otherUser]);
    await knexClient<Chat>('Chat').insert(otherChats);
    await knexClient<ChatMembership>('ChatMembership').insert(unrelatedChatMemberships);

    /* Execute */
    const matchingChatMemberships = await getAllChatMembershipsOfUsers([testUser.userId]);

    /* Cleanup */
    await knexClient<ChatMembership>('ChatMembership').delete();
    await knexClient<Chat>('Chat').delete();
    await knexClient<User>('User').delete();

    /* Test */
    expect(matchingChatMemberships).toEqual([]);
  });
});

describe('getAllChatMembershipsWithIds(chatIds)', () => {
  it('returns all chat memberships corresponding to the specified chatIds', async () => {
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
    const otherChats: Chat[] = (
      Array(2).fill(null)
        .map((_, i) => ({
          chatId: uuid(),
          name: `otherChats[${i}]`,
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
      Array(otherChats.length).fill(null)
        .map((_, i) => ({
          userId: testUser.userId,
          chatId: otherChats[i].chatId,
          chatMembershipId: uuid()
        }))
    );
    await knexClient<User>('User').insert(testUser);
    await knexClient<Chat>('Chat').insert([...testChats, ...otherChats]);
    await knexClient<ChatMembership>('ChatMembership').insert([...testChatMemberships, ...unrelatedChatMemberships]);

    /* Execute */
    const chatIds = testChats.map(chat => chat.chatId);
    const matchingChatMemberships = await getAllChatMembershipsWithIds(chatIds);

    /* Cleanup */
    await knexClient<ChatMembership>('ChatMembership').delete();
    await knexClient<Chat>('Chat').delete();
    await knexClient<User>('User').delete();

    /* Test */
    matchingChatMemberships.forEach(record => delete record.dtmJoined);
    const comparator = (a: ChatMembership, b: ChatMembership) => a.chatMembershipId.localeCompare(b.chatMembershipId);
    const sortedResult = matchingChatMemberships.sort(comparator);
    const sortedExpected = testChatMemberships.sort(comparator);
    expect(sortedResult).toEqual(sortedExpected);
  });
  it('returns [] if the specified chat has no memberships', async () => {
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
    const otherChats: Chat[] = (
      Array(2).fill(null)
        .map((_, i) => ({
          chatId: uuid(),
          name: `otherChats[${i}]`,
          type: 'direct'
        }))
    );
    const unrelatedChatMemberships: ChatMembership[] = (
      Array(otherChats.length).fill(null)
        .map((_, i) => ({
          userId: testUser.userId,
          chatId: otherChats[i].chatId,
          chatMembershipId: uuid()
        }))
    );
    await knexClient<User>('User').insert(testUser);
    await knexClient<Chat>('Chat').insert(otherChats);
    await knexClient<ChatMembership>('ChatMembership').insert(unrelatedChatMemberships);

    /* Execute */
    const chatIds = testChats.map(chat => chat.chatId);
    const matchingChatMemberships = await getAllChatMembershipsWithIds(chatIds);

    /* Cleanup */
    await knexClient<ChatMembership>('ChatMembership').delete();
    await knexClient<Chat>('Chat').delete();
    await knexClient<User>('User').delete();

    /* Test */
    expect(matchingChatMemberships).toEqual([]);
  });
});