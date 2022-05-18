
import type User from '@/models/User';
import GroupChat from '@/models/GroupChat';

export default interface GroupChatMembership {
  groupChatMembershipId: string;
  dtmJoined: string; // Expected to be in ISO format.
  userId: User['userId'];
  groupChatId: GroupChat['groupChatId'];
}