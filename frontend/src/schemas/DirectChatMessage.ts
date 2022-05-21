
import type User from '@/schemas/User';

export default interface DirectChatMessage {
  directChatMessageId: string; // PRIMARY KEY
  dtmPosted: string; // Expected to be in ISO format.
  content: string;
  senderUserId: User['userId']; // FOREIGN KEY
  receiverUserId: User['userId']; // FOREIGN KEY
}