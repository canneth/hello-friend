
import type User from '@/models/User';

const authStore = {
  loggedInUser: null as User | null,

  setLoggedInUser(user: User | null) {
    this.loggedInUser = user;
  }
};

export default authStore;