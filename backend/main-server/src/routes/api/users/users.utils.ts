
import User from '@src/database/schemas/User';

export function censorUser(user: User) {
  const censoredUser = { ...user, password: undefined };
  return censoredUser;
}