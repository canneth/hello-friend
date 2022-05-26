<script setup lang="ts">

import { computed, ref, watchEffect } from 'vue';
import TheChatWindowHeader from '@/components/TheChatWindowHeader.vue';
import TheChatWindowMessageWindow from '@/components/TheChatWindowMessageWindow.vue';
import TheChatWindowInputBar from '@/components/TheChatWindowInputBar.vue';
import useUIStore from '@/composables/useUIStore';
import type ChatMessage from '@/schemas/ChatMessage';
import backendAxios from '@/globals/configuredAxios';


const uiStore = useUIStore();

const chatId = computed(() => uiStore.value.activeChat?.chatId ?? '');
const chatName = computed(() => uiStore.value.activeChat?.chatName ?? '');
const chatAvatar = computed(() => uiStore.value.activeChat?.chatAvatar ?? null);

const chatMessages = ref<ChatMessage[]>([]);

watchEffect(async () => {
  if (!chatId.value) return;
  const { data: messages } = await backendAxios.get<ChatMessage[]>(
    `/api/chatMessages?
      chatIds=${chatId.value}
    `.replace(/\s/g, '')
  );
  chatMessages.value = messages;
});

</script>

<template>
  <div :class="$style.overallContainer">
    <div v-if="uiStore.activeChat" :class="$style.chatWindowContainer">
      <TheChatWindowHeader :chat-name="chatName" :chat-avatar="chatAvatar ?? null" />
      <TheChatWindowMessageWindow :messages="chatMessages" />
      <TheChatWindowInputBar :class="$style.inputBar" />
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
.inputBar {
  position: relative;
  padding: 0px clamp(10px, 20%, 300px);
  margin-top: 10px;
  margin-bottom: 20px;
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