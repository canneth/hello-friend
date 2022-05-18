
import { createGlobalObservable, useLocalObservable } from 'mobx-vue-lite'
import userStore from '@/store/userStore';

const useUserStore = createGlobalObservable(() => {
  return useLocalObservable(() => userStore)
});

export default useUserStore;