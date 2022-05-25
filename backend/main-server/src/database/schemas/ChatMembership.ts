
import type User from '@root/src/database/schemas/User';
import Chat from '@root/src/database/schemas/Chat';

export default interface ChatMembership {
  // PRIMARY KEY (userId, chatId)
  userId: User['userId']; // FOREIGN KEY
  chatId: Chat['chatId']; // FOREIGN KEY
  chatMembershipId: string; // UNIQUE
  dtmJoined?: string; // DEFAULT CURRENT_TIMESTAMP
}