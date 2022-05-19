
import User from '@root/src/database/schemas/User';

export default interface DirectChatMessage {
  directChatMessageId: string; // PRIMARY KEY
  dtmPosted: string; // Expected to be in ISO format.
  content: string;
  senderUserId: User['userId']; // FOREIGN KEY
  receiverUserId: User['userId']; // FOREIGN KEY
}