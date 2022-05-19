
export default interface User {
  userId: string; // PRIMARY KEY
  email: string; // UNIQUE
  handle: string; // UNIQUE
  password: string;
  name: string;
  avatarSrc: string | null;
  dtmCreated?: string; // DEFAULT CURRENT_TIMESTAMP
}