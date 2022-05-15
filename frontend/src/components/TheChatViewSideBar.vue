<script setup lang="ts">

import CommonSearchBar from '@/components/common/CommonSearchBar.vue';
import useRootStore from '@/composables/useRootStore';
import { computed } from '@vue/reactivity';

const store = useRootStore();

const displayName = computed(() => {
  return store.value.loggedInUser?.name.split(' ')[0];
});

</script>

<template>
  <div :class="$style.overallContainer">
    <header :class="$style.header">
      <div :class="$style.profileBar">
        <div :class="$style.avatarContainer">
          <img
            :class="$style.avatarImg"
            :src="store.loggedInUser?.avatarSrc ?? 'placeholder-avatar.png'" />
        </div>
        <p :class="$style.displayName">
          {{ displayName }}
        </p>
      </div>
      <CommonSearchBar />
    </header>
  </div>
</template>

<style module>
.overallContainer {
  position: relative;
  height: 100%;
  width: 300px;

  border: 1px solid;
}
.header {
  position: relative;
  height: 100px;
  width: 100%;
  background-color: var(--color-primary-base);

  border: 1px solid;
}
.profileBar {
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px 16px;
}
.avatarContainer {
  position: relative;
  border-radius: 50%;
  overflow: clip;
  width: 50px;
  aspect-ratio: 1 / 1;
}
.avatarImg {
  width: 100%;
  height: auto;
}
.displayName {
  font-weight: bold;
  color: var(--color-grey-white);
}
</style>