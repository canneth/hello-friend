<script setup lang="ts">

import { useRouter } from 'vue-router';
import useUserStore from '@/composables/useUserStore';
import TheChatViewSideBar from '@/components/TheChatViewSideBar.vue';
import { onBeforeMount, onUnmounted } from 'vue';
import TheChatWindow from '@/components/TheChatWindow.vue';
import useUIStore from '@/composables/useUIStore';

const router = useRouter();
const userStore = useUserStore();
const uiStore = useUIStore();

onBeforeMount(() => {
  if (!userStore.value.user) router.push('/login');
});

onUnmounted(() => {
  uiStore.value.setActiveChat(null);
});

</script>

<template>
  <div :class="$style.overallContainer">
    <TheChatViewSideBar :class="$style.sideBar" />
    <TheChatWindow :class="$style.chatWindow" />
  </div>
</template>

<style module>
.overallContainer {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: var(--color-contrast-dark);
}
.sideBar {
  position: relative;
  height: 100%;
  width: clamp(350px, 30vw, 500px);
  flex: 1 0 auto;
}

.chatWindow {
  position: relative;

}
</style>