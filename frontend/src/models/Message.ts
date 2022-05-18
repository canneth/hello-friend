
import type User from '@/models/User';
import type Chat from '@/models/Chat';

export default interface Message {
  messageId: string;
  dtmCreated: string; // Expected to be in ISO format.
  content: string;
  userId: User['userId'];
  chatId: Chat['chatId'];
}