
import type User from '@/schemas/User';

export type LoggedInUser = (
  Partial<User>
  & Pick<User,
    'userId' |
    'email' |
    'handle' |
    'password' |
    'name' |
    'avatarSrc' |
    'dtmCreated'
  >
);

const userStore = {
  user: null as LoggedInUser | null,

  setUser(user: LoggedInUser | null) {
    this.user = user;
  }
};

export default userStore;