
import type User from '@/models/User';
import type Chat from '@/models/Chat';

export default interface ChatMembership {
  chatMembershipId: string;
  dtmJoined: string; // Expected to be in ISO format.
  userId: User['userId'];
  chatId: Chat['chatId'];
}