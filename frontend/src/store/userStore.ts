
import type User from '@/models/User';

const userStore = {
  user: null as User | null,

  setUser(user: User | null) {
    this.user = user;
  }
};

export default userStore;