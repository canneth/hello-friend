
import type User from '@/models/User';
import { createGlobalObservable, useLocalObservable } from 'mobx-vue-lite'

const useRootStore = createGlobalObservable(() => {
  return useLocalObservable(() => ({

    _loggedInUser: null as User | null,

    get loggedInUser() {
      return this._loggedInUser;
    },

    setLoggedInUser(user: User | null) {
      this._loggedInUser = user;
    }
  }))
});

export default useRootStore;