
import type { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, type Store } from 'vuex';
import authModule from './auth-module';

export type RootState = null;

const store = createStore<RootState>({
  modules: {
    auth: authModule
  }
});

export const storeKey: InjectionKey<Store<RootState>> = Symbol();

export function useStore() {
  return baseUseStore(storeKey);
}

export default store;