
import type User from '@/models/User';
import type { MutationTree } from 'vuex';
import type { AuthState } from '.';

const authMutations: MutationTree<AuthState> = {
  setLoggedInUser(state, payload: User) {
    state.loggedInUser = payload;
  }
};

export default authMutations;