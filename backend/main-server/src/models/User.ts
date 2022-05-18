
export default interface User {
  userId: string;
  email: string;
  handle: string;
  password: string;
  name: string;
  avatarSrc: string | null;
  dtmCreated: string; // Expected to be in ISO format.
}