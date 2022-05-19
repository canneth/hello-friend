
import type User from '@root/src/database/schemas/User';
import GroupChat from '@root/src/database/schemas/GroupChat';

export default interface GroupChatMembership {
  // PRIMARY KEY (userId, groupChatId)
  userId: User['userId']; // FOREIGN KEY
  groupChatId: GroupChat['groupChatId']; // FOREIGN KEY
  groupChatMembershipId: string; // UNIQUE
  dtmJoined: string; // DEFAULT CURRENT_TIMESTAMP
}