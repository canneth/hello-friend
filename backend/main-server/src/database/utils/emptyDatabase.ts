
import knexClient from '@src/database/client';
import User from '@src/database/schemas/User';
import GroupChatMessage from '@src/database/schemas/GroupChatMessage';
import GroupChatMembership from '@src/database/schemas/GroupChatMembership';
import GroupChat from '@src/database/schemas/GroupChat';
import DirectChatMessage from '@src/database/schemas/DirectChatMessage';
import ContactListing from '@src/database/schemas/ContactListing';

if (process.env.NODE_ENV !== 'test') throw new Error('emptyDatabase() can only be used in a testing environment!');

async function emptyDatabase() {
  /* Reset test database */
  await knexClient<GroupChatMessage>('GroupChatMessage').delete();
  await knexClient<GroupChatMembership>('GroupChatMembership').delete();
  await knexClient<GroupChat>('GroupChat').delete();
  await knexClient<DirectChatMessage>('DirectChatMessage').delete();
  await knexClient<ContactListing>('ContactListing').delete();
  await knexClient<User>('User').delete();
};

export default emptyDatabase;