<script setup lang="ts">

import { computed } from 'vue';
import TheChatWindowHeader from '@/components/TheChatWindowHeader.vue';
import TheChatWindowMessageWindow from '@/components/TheChatWindowMessageWindow.vue';
import TheChatWindowInputBar from '@/components/TheChatWindowInputBar.vue';
import useUIStore from '@/composables/useUIStore';


const uiStore = useUIStore();

const chatName = computed(() => uiStore.value.activeChat?.chatName ?? '');
const chatAvatar = computed(() => uiStore.value.activeChat?.chatAvatar ?? null);
const participantIdList = computed(() => uiStore.value.activeChat?.participantIds ?? []);

</script>

<template>
  <div :class="$style.overallContainer">
    <div v-if="uiStore.activeChat" :class="$style.chatWindowContainer">
      <TheChatWindowHeader :chat-name="chatName" :chat-avatar="chatAvatar ?? null" />
      <TheChatWindowMessageWindow :participant-ids="participantIdList" />
      <TheChatWindowInputBar />
    </div>
    <div v-else="" :class="$style.noActiveChatContainer">
      <p>Select a chat and get chatting!</p>
    </div>
  </div>
</template>

<style module>
.overallContainer {
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
}
.chatWindowContainer {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}

.noActiveChatContainer {
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
}
.noActiveChatContainer > p {
  position: relative;
  opacity: 0.5;
}
</style>