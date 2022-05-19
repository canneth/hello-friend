
import User from '@root/src/database/schemas/User';

export default interface DirectChatMessage {
  directChatMessageId: string; // PRIMARY KEY
  dtmPosted: string; // DEFAULT CURRENT_TIMESTAMP
  content: string;
  senderUserId: User['userId']; // FOREIGN KEY
  receiverUserId: User['userId']; // FOREIGN KEY
}