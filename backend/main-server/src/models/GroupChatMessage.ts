
import type User from '@/models/User';
import GroupChat from '@/models/GroupChat';

export default interface GroupChatMessage {
  groupChatMessageId: string;
  dtmPosted: string; // Expected to be in ISO format.
  content: string;
  userId: User['userId'];
  groupChatId: GroupChat['groupChatId'];
}