
import type User from '@root/src/database/schemas/User';
import Chat from '@root/src/database/schemas/Chat';

export default interface ChatMessage {
  chatMessageId: string; // PRIMARY KEY
  userId: User['userId'];
  chatId: Chat['chatId'];
  dtmPosted?: string; // DEFAULT CURRENT_TIMESTAMP
  content: string;
  // FOREIGN KEY (userId, chatId)
}