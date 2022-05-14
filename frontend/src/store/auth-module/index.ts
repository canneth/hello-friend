
import authGetters from './getters';
import authMutations from './mutations';
import type User from '@/models/User';
import type { Module } from 'vuex';
import type { RootState } from '@/store';

export interface AuthState {
  loggedInUser: User | null;
}

const authModule: Module<AuthState, RootState> = {
  namespaced: true,
  state() {
    return {
      loggedInUser: null
    }
  },
  getters: authGetters,
  mutations: authMutations
}

export default authModule;