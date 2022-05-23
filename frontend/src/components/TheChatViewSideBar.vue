<script setup lang="ts">

import { computed, ref } from 'vue';
import CommonSearchBar from '@/components/common/CommonSearchBar.vue';
import useUserStore from '@/composables/useUserStore';

const userStore = useUserStore();

const displayName = computed(() => {
  return userStore.value.user?.name.split(' ')[0];
});

const searchBarHasFocus = ref(false);

</script>

<template>
  <div :class="$style.overallContainer">
    <header :class="$style.header">
      <div :class="$style.profileBar">
        <div :class="$style.avatarContainer">
          <img
            :class="$style.avatarImg"
            :src="userStore.user?.avatarSrc ?? 'placeholder-avatar.png'" />
        </div>
        <p :class="$style.displayName">
          {{ displayName }}
        </p>
      </div>
      <CommonSearchBar :class="[$style.searchBar, searchBarHasFocus && $style.hasFocus]" />
    </header>
  </div>
</template>

<style module>
.overallContainer {
  position: relative;
  height: 100%;
  width: 300px;
  background-color: var(--color-background);
  box-shadow: var(--box-shadow-standard);
  overflow: clip;
}
.header {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  background-color: var(--color-primary-base);
  box-shadow: var(--box-shadow-standard);
  padding: 16px 20px;
}
.profileBar {
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
}
.avatarContainer {
  position: relative;
  border-radius: 50%;
  overflow: clip;
  width: 50px;
  background: white;
  aspect-ratio: 1 / 1;
}
.avatarImg {
  width: 100%;
  height: auto;
}
.displayName {
  color: var(--color-body);
}
.searchBar {
  position: relative;
  width: 100%;
  background-color: var(--color-contrast-light);
  caret-color: var(--color-primary-base);
  color: var(--color-body);
  transition: border-color 100ms ease-out;
  font-size: var(--font-size-small);
}
</style>