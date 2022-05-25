
export type ChatType = 'direct' | 'group';

export default interface Chat {
  chatId: string; // PRIMARY KEY
  name: string;
  type: ChatType; // DEFAULT 'direct'
  dtmCreated?: string; // DEFAULT CURRENT_TIMESTAMP
}