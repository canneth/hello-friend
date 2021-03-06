
export type ChatType = 'direct' | 'group';

export default interface Chat {
  chatId: string; // PRIMARY KEY
  name?: string; // DEFAULT NULL
  type: ChatType; // DEFAULT 'direct'
  dtmCreated?: string; // DEFAULT CURRENT_TIMESTAMP
  avatarSrc?: string; // DEFAULT NULL
}