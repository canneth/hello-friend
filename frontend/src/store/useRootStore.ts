
import { createGlobalObservable, useLocalObservable } from 'mobx-vue-lite'
import rootStore from './rootStore';

const useRootStore = createGlobalObservable(() => {
  return useLocalObservable(() => rootStore)
});

export default useRootStore;