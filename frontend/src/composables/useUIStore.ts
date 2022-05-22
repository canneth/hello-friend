
import { createGlobalObservable, useLocalObservable } from 'mobx-vue-lite'
import uiStore from '@/store/uiStore';

const useUIStore = createGlobalObservable(() => {
  return useLocalObservable(() => uiStore)
});

export default useUIStore;