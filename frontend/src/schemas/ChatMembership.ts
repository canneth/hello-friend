
import type User from '@/schemas/User';
import type Chat from '@/schemas/Chat';

export default interface ChatMembership {
  // PRIMARY KEY (userId, chatId)
  userId: User['userId']; // FOREIGN KEY
  chatId: Chat['chatId']; // FOREIGN KEY
  chatMembershipId: string; // UNIQUE
  dtmJoined?: string; // DEFAULT CURRENT_TIMESTAMP
}