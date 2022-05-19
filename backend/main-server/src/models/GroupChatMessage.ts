
import type User from '@src/models/User';
import GroupChat from '@src/models/GroupChat';

export default interface GroupChatMessage {
  groupChatMessageId: string; // PRIMARY KEY
  userId: User['userId'];
  groupChatId: GroupChat['groupChatId'];
  dtmPosted: string; // Expected to be in ISO format.
  content: string;
  // FOREIGN KEY (userId, groupChatId)
}