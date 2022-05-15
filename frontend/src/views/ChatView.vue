<script setup lang="ts">

import { useRouter } from 'vue-router';
import useRootStore from '@/composables/useRootStore';
import TheChatViewSideBar from '@/components/TheChatViewSideBar.vue';

const router = useRouter();
const store = useRootStore();

// if (!store.value.loggedInUser) router.push('/login');

</script>

<template>
  <div :class="$style.overallContainer">
    <TheChatViewSideBar :class="$style.sideBar" />
  </div>
</template>

<style module>
.overallContainer {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
}
.sideBar {
  position: relative;
  height: 100%;
  width: clamp(350px, 30vw, 500px);
}
</style>