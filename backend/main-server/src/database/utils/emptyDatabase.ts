
import knexClient from '@src/database/client';
import User from '@src/database/schemas/User';
import ChatMembership from '@src/database/schemas/ChatMembership';
import Chat from '@src/database/schemas/Chat';
import ChatMessage from '@src/database/schemas/ChatMessage';
import ContactListing from '@src/database/schemas/ContactListing';

if (process.env.NODE_ENV !== 'test') throw new Error('emptyDatabase() can only be used in a testing environment!');

async function emptyDatabase() {
  /* Reset test database */
  await knexClient<ChatMessage>('ChatMessage').delete();
  await knexClient<ChatMembership>('ChatMembership').delete();
  await knexClient<Chat>('Chat').delete();
  await knexClient<ContactListing>('ContactListing').delete();
  await knexClient<User>('User').delete();
};

export default emptyDatabase;