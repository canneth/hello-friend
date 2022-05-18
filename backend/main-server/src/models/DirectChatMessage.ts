
import User from '@/models//User';

export default interface DirectChatMessage {
  directChatMessageId: string;
  dtmPosted: string; // Expected to be in ISO format.
  content: string;
  senderUserId: User['userId'];
  receiverUserId: User['userId'];
}