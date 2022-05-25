
import type User from '@/schemas/User';
import type Chat from '@/schemas/Chat';

export default interface ChatMessage {
  chatMessageId: string; // PRIMARY KEY
  userId: User['userId'];
  chatId: Chat['chatId'];
  dtmPosted?: string; // DEFAULT CURRENT_TIMESTAMP
  content: string;
  // FOREIGN KEY (userId, chatId)
}