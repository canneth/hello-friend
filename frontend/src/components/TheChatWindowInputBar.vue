<script setup lang="ts">

import useUIStore from '@/composables/useUIStore';
import useUserStore from '@/composables/useUserStore';
import backendAxios from '@/globals/configuredAxios';
import type ChatMessage from '@/schemas/ChatMessage';
import { computed, ref } from 'vue';

const uiStore = useUIStore();
const userStore = useUserStore();

const selfUserId = computed(() => userStore.value.user?.userId);
const chatId = computed(() => uiStore.value.activeChat?.chatId);

const messageContent = ref('');

async function clickHandlerPostButton(e: MouseEvent) {
  e.preventDefault();
  if (!selfUserId.value) throw new Error('Cannot send a message without being logged in!');
  if (!chatId.value) throw new Error('Cannot send a message without an activeChat in the uiStore!');
  const content = messageContent.value;
  if (!content) return;
  const chatMessage: Pick<ChatMessage, 'userId' | 'chatId' | 'content'> = {
    userId: selfUserId.value,
    chatId: chatId.value,
    content
  };
  try {
    await backendAxios.post(`/api/chatMessages`, chatMessage);
  } catch (err) {
    console.log(err);
  }
}

</script>

<template>
  <div :class="$style.overallContainer">
    <div :class="$style.inputContainer">
      <input :class="$style.input" type="text" placeholder="Say something!" v-model="messageContent" />
    </div>
    <button :class="$style.postButton" @click="clickHandlerPostButton">
      <span class="iconify" data-icon="fluent:send-20-filled" data-width="100%" data-height="auto"></span>
    </button>
  </div>
</template>

<style module>
.overallContainer {
  position: relative;
  display: flex;
  align-items: center;
  color: var(--color-body);
  caret-color: var(--color-primary-base);
  width: 100%;
  gap: 10px;
}

.inputContainer {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 20px;
  height: 100%;
  width: 100%;
  color: inherit;
  border-radius: 7px;
  overflow: clip;
}
.inputContainer::before {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  background-color: var(--color-body);
  opacity: 0.1;
}
.input {
  position: relative;
  background: none;
  width: 100%;
  height: 100%;
  color: inherit;
  caret-color: inherit;
  font-size: var(--font-size-small);
}
.input:focus {
  outline: none;
}

.postButton {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  aspect-ratio: 1 / 1;
  color: white;
  flex: 0 0 auto;
}
.postButton::before {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  background-color: var(--color-primary-base);
  opacity: 0.6;
  transition: opacity 100ms ease-out;
}
.postButton * {
  position: relative;
}

@media (hover: hover) {
  .postButton:hover {
    cursor: pointer;
  }
  .postButton:hover::before {
    opacity: 1;
  }
}
</style>