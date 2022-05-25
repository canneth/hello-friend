<script setup lang="ts">

import { computed } from 'vue';
import useUIStore from '@/composables/useUIStore';
import type ChatMessage from '@/schemas/ChatMessage';

const props = defineProps<{
  chatId: string;
  chatName: string;
  avatarSrc?: string;
  latestMessage?: ChatMessage;
  lastMessageSentByUser?: boolean; // Controls whether message status indicator is displayed.
}>()

const emit = defineEmits<{
  (eventName: 'click', e: MouseEvent, id: string): void;
}>();

const displayDate = computed(() => {
  if (!props.latestMessage?.dtmPosted) return null;
  const date = new Date(props.latestMessage.dtmPosted);
  return Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short' }).format(date);
});
const displayMessage = computed(() => {
  if (!props.latestMessage) return 'No messages';
  return props.latestMessage.content;
});

const uiStore = useUIStore();

const isActiveChat = computed(() => uiStore.value.activeChat?.chatId === props.chatId);

</script>

<template>
  <div :class="[$style.overallContainer, isActiveChat && $style.isActiveChat]" @click="emit('click', $event, chatId)">
    <div :class="$style.avatarContainer">
      <img :class="$style.avatarImg" :src="avatarSrc ?? 'placeholder-avatar.png'" object-fit="cover" />
    </div>
    <div :class="$style.contentContainer">
      <header :class="$style.headerContainer">
        <h1 :class="$style.chatName">
          {{ chatName }}
        </h1>
        <p :class="$style.lastMessageDate">
          {{ displayDate }}
        </p>
      </header>
      <div :class="$style.messageContainer">
        <div :class="$style.messageStatusContainer">
          <!-- TODO -->
        </div>
        <p :class="$style.message">
          {{ displayMessage }}
        </p>
      </div>
    </div>
  </div>
</template>

<style module>
.overallContainer {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 12px;
  gap: 10px;
}
.overallContainer::after {
  position: absolute;
  content: '';
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: var(--color-primary-base);
  opacity: 0;
  transition: opacity 100ms ease-out;
}
.overallContainer.isActiveChat::after {
  opacity: 0.05;
}

.avatarContainer {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  aspect-ratio: 1 / 1;
  background: white;
  border-radius: 50%;
  overflow: clip;
  flex: 0 0 auto;
}
.avatarImg {
  position: relative;
  width: 100%;
  height: 100%;
}

.contentContainer {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  width: 100%;
  gap: 6px;
}
.headerContainer {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.chatName {
  position: relative;
  color: var(--color-body);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  font-size: var(--font-size-regular);
}
.lastMessageDate {
  position: relative;
  font-size: var(--font-size-small);
  opacity: 0.4;
  white-space: nowrap;
}

.messageContainer {
  position: relative;
  width: 100%;
}
.message {
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: var(--font-size-small);
  opacity: 0.6;
  width: 100%;
}

@media (hover: hover) {
  .overallContainer:hover {
    cursor: pointer;
  }
  .overallContainer:hover::after {
    position: absolute;
    content: '';
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: var(--color-body);
    opacity: 0.05;
  }
}
</style>