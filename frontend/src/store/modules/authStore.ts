
import type User from '@/models/User';

const authStore = {
  _loggedInUser: null as User | null,

  get loggedInUser() {
    return this._loggedInUser;
  },
  setLoggedInUser(user: User | null) {
    this._loggedInUser = user;
  }
};

export default authStore;