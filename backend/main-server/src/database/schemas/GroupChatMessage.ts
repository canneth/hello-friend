
import type User from '@root/src/database/schemas/User';
import GroupChat from '@root/src/database/schemas/GroupChat';

export default interface GroupChatMessage {
  groupChatMessageId: string; // PRIMARY KEY
  userId: User['userId'];
  groupChatId: GroupChat['groupChatId'];
  dtmPosted?: string; // DEFAULT CURRENT_TIMESTAMP
  content: string;
  // FOREIGN KEY (userId, groupChatId)
}