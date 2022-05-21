
import type User from '@/schemas/User';

const userStore = {
  user: null as User | null,

  setUser(user: User | null) {
    this.user = user;
  }
};

export default userStore;