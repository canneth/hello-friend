

import knexClient from '@src/database/client';
import DirectChatMessage from '@src/database/schemas/DirectChatMessage';
import User from '@src/database/schemas/User';
import { getDirectChatMessagesInvolvingUser, getLatestDirectChatMessagesInvolvingUser } from './directChatMessages.service';

// describe('getAllDirectChatMessagesSentBy(senderUserId)', () => {
//   it('', () => {
//   });
// });

// describe('getAllDirectChatMessagesReceivedBy(receiverUserId)', () => {
//   it('', () => {
//   });
// });

// describe('getAllDirectChatMessagesBetweenUsers(senderUserId, receiverUserId)', () => {
//   it('', () => {
//   });
// });

describe('getDirectChatMessagesInvolvingUser(userId)', () => {
  it('returns all records from the DirectChatMessage table where the specified user is either the sender or receiver', async () => {
    /* Setup */
    const testUser: User = {
      userId: 'fc72363c-4d5e-4884-9241-545e911049e8',
      email: 'some@email',
      handle: 'some-handle',
      password: 'some-password',
      name: 'Some Name',
      avatarSrc: 'some-url'
    };
    const otherUser: User = {
      userId: 'c39f9175-0c16-4ca7-a230-d8f03ba22705',
      email: 'some-other@email',
      handle: 'some-other-handle',
      password: 'some-other-password',
      name: 'Some Other Name',
      avatarSrc: 'some-other-url'
    };
    const unrelatedSender: User = {
      userId: '9a704774-7889-45b3-aa5a-9749430055d5',
      email: 'unrelated-sender@email',
      handle: 'unrelated-sender-handle',
      password: 'unrelated-sender-password',
      name: 'Unrelated Sender',
      avatarSrc: 'unrelated-sender-url'
    };
    const unrelatedReceiver: User = {
      userId: '04d33a2e-950b-495b-bf85-09ae349e5889',
      email: 'unrelated-receiver@email',
      handle: 'unrelated-receiver-handle',
      password: 'unrelated-receiver-password',
      name: 'Unrelated Receiver',
      avatarSrc: 'unrelated-receiver-url'
    };

    const messageSentByUser: DirectChatMessage = {
      directChatMessageId: '833861b2-9e76-4319-9176-0fabb95c2905',
      content: 'I am a message SENT by the user!',
      senderUserId: testUser.userId,
      receiverUserId: otherUser.userId
    };
    const messageReceivedByUser: DirectChatMessage = {
      directChatMessageId: '49b54e65-3d4c-46c4-a9c4-55a9a657a952',
      content: 'I am a message RECEIVED by the user!',
      senderUserId: otherUser.userId,
      receiverUserId: testUser.userId
    };
    const unrelatedMessage: DirectChatMessage = {
      directChatMessageId: '24490d74-f74e-49b4-8ff4-05754d7b8dac',
      content: 'I am a message NEITHER RECEIVED NOR SENT by the user!',
      senderUserId: unrelatedSender.userId,
      receiverUserId: unrelatedReceiver.userId
    };

    await knexClient<DirectChatMessage>('DirectChatMessage').delete();
    await knexClient<User>('User').delete();
    await knexClient<User>('User').insert([testUser, otherUser, unrelatedSender, unrelatedReceiver]);
    await knexClient<DirectChatMessage>('DirectChatMessage').insert([messageSentByUser, messageReceivedByUser, unrelatedMessage]);

    /* Execute */
    const directChatMessages = await getDirectChatMessagesInvolvingUser(testUser.userId);

    /* Cleanup */
    await knexClient<DirectChatMessage>('DirectChatMessage').delete();
    await knexClient<User>('User').delete();

    /* Test */
    directChatMessages.forEach(record => delete record.dtmPosted);
    const comparator = (a: DirectChatMessage, b: DirectChatMessage) => a.directChatMessageId.localeCompare(b.directChatMessageId);
    const sortedExpected = [messageSentByUser, messageReceivedByUser].sort(comparator);
    const sortedResult = directChatMessages.sort(comparator);
    expect(sortedResult).toEqual(sortedExpected);
  });
  it('returns [] if no matching records exist', async () => {
    /* Setup */
    const testUser: User = {
      userId: 'fc72363c-4d5e-4884-9241-545e911049e8',
      email: 'some@email',
      handle: 'some-handle',
      password: 'some-password',
      name: 'Some Name',
      avatarSrc: 'some-url'
    };
    await knexClient<DirectChatMessage>('DirectChatMessage').delete();
    await knexClient<User>('User').delete();

    /* Execute */
    const directChatMessages = await getDirectChatMessagesInvolvingUser(testUser.userId);

    /* Test */
    directChatMessages.forEach(record => delete record.dtmPosted);
    expect(directChatMessages).toEqual([]);
  });
});

describe('getLatestDirectChatMessagesInvolvingUser(userId)', () => {
  it('returns a list of all messages where each message is the latest received/sent by the user in their respective chats', async () => {
    /* Setup */
    const testUser: User = {
      userId: 'fc72363c-4d5e-4884-9241-545e911049e8',
      email: 'some@email',
      handle: 'some-handle',
      password: 'some-password',
      name: 'Some Name',
      avatarSrc: 'some-url'
    };
    const otherUser: User = {
      userId: 'c39f9175-0c16-4ca7-a230-d8f03ba22705',
      email: 'some-other@email',
      handle: 'some-other-handle',
      password: 'some-other-password',
      name: 'Some Other Name',
      avatarSrc: 'some-other-url'
    };
    const unrelatedSender: User = {
      userId: '9a704774-7889-45b3-aa5a-9749430055d5',
      email: 'unrelated-sender@email',
      handle: 'unrelated-sender-handle',
      password: 'unrelated-sender-password',
      name: 'Unrelated Sender',
      avatarSrc: 'unrelated-sender-url'
    };
    const unrelatedReceiver: User = {
      userId: '04d33a2e-950b-495b-bf85-09ae349e5889',
      email: 'unrelated-receiver@email',
      handle: 'unrelated-receiver-handle',
      password: 'unrelated-receiver-password',
      name: 'Unrelated Receiver',
      avatarSrc: 'unrelated-receiver-url'
    };

    const latestMessageSentByUser = {
      directChatMessageId: 'b9b87593-0559-4940-b42d-fe31dc228023',
      content: 'I am the LATEST MESSAGE sent by the user!',
      senderUserId: testUser.userId,
      receiverUserId: otherUser.userId
    };
    const latestMessageReceivedByUser = {
      directChatMessageId: 'e74b6a74-88b1-432e-896e-bbffdfa1e468',
      content: 'I am the LATEST MESSAGE received by the user!',
      senderUserId: otherUser.userId,
      receiverUserId: testUser.userId
    };
    const messagesSentByUser: DirectChatMessage[] = [
      {
        directChatMessageId: '833861b2-9e76-4319-9176-0fabb95c2905',
        content: 'I am the FIRST MESSAGE sent by the user!',
        senderUserId: testUser.userId,
        receiverUserId: otherUser.userId
      },
      {
        directChatMessageId: 'c026fab7-7812-40b7-90f0-46736ebdd0f9',
        content: 'I am the SECOND MESSAGE sent by the user!',
        senderUserId: testUser.userId,
        receiverUserId: otherUser.userId
      },
      latestMessageSentByUser
    ];
    const messagesReceivedByUser: DirectChatMessage[] = [
      {
        directChatMessageId: '49b54e65-3d4c-46c4-a9c4-55a9a657a952',
        content: 'I am the FIRST MESSAGE received by the user!',
        senderUserId: otherUser.userId,
        receiverUserId: testUser.userId
      },
      {
        directChatMessageId: '72d25459-17d1-4a53-b1e5-72051272ab23',
        content: 'I am the SECOND MESSAGE received by the user!',
        senderUserId: otherUser.userId,
        receiverUserId: testUser.userId
      },
      latestMessageReceivedByUser
    ];
    const unrelatedMessage: DirectChatMessage = {
      directChatMessageId: '24490d74-f74e-49b4-8ff4-05754d7b8dac',
      content: 'I am a message NEITHER RECEIVED NOR SENT by the user!',
      senderUserId: unrelatedSender.userId,
      receiverUserId: unrelatedReceiver.userId
    };

    await knexClient<DirectChatMessage>('DirectChatMessage').delete();
    await knexClient<User>('User').delete();
    await knexClient<User>('User').insert([testUser, otherUser, unrelatedSender, unrelatedReceiver]);
    const messagesToInsert = [...messagesSentByUser, ...messagesReceivedByUser, unrelatedMessage];
    for (const message of messagesToInsert) {
      await knexClient<DirectChatMessage>('DirectChatMessage').insert(message);
      await knexClient.raw('SELECT pg_sleep(0.001)');
    }

    /* Execute */
    const directChatMessages = await getLatestDirectChatMessagesInvolvingUser(testUser.userId);

    /* Test */
    directChatMessages.forEach(record => delete record.dtmPosted);
    const comparator = (a: DirectChatMessage, b: DirectChatMessage) => a.directChatMessageId.localeCompare(b.directChatMessageId);
    const sortedExpected = [latestMessageSentByUser, latestMessageReceivedByUser].sort(comparator);
    const sortedResult = directChatMessages.sort(comparator);
    expect(sortedResult).toEqual(sortedExpected);
  });
  it('returns [] if no matching records exist', async () => {
    /* Setup */
    const testUser: User = {
      userId: 'fc72363c-4d5e-4884-9241-545e911049e8',
      email: 'some@email',
      handle: 'some-handle',
      password: 'some-password',
      name: 'Some Name',
      avatarSrc: 'some-url'
    };
    await knexClient<DirectChatMessage>('DirectChatMessage').delete();
    await knexClient<User>('User').delete();

    /* Execute */
    const directChatMessages = await getLatestDirectChatMessagesInvolvingUser(testUser.userId);

    /* Test */
    directChatMessages.forEach(record => delete record.dtmPosted);
    expect(directChatMessages).toEqual([]);
  });
});