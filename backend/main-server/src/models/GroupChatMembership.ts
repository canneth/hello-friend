
import type User from '@src/models/User';
import GroupChat from '@src/models/GroupChat';

export default interface GroupChatMembership {
  // PRIMARY KEY (userId, groupChatId)
  userId: User['userId']; // FOREIGN KEY
  groupChatId: GroupChat['groupChatId']; // FOREIGN KEY
  groupChatMembershipId: string; // UNIQUE
  dtmJoined: string; // Expected to be in ISO format.
}