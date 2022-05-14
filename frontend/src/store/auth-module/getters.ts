
import type { GetterTree } from 'vuex';
import type { AuthState } from '.';
import type { RootState } from '@/store';

const authGetters: GetterTree<AuthState, RootState> = {
  loggedInUser(state) {
    return state.loggedInUser;
  }
};

export default authGetters;