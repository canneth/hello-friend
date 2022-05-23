
export default interface GroupChat {
  groupChatId: string; // PRIMARY KEY
  title: string;
  dtmCreated?: string; // DEFAULT CURRENT_TIMESTAMP
}