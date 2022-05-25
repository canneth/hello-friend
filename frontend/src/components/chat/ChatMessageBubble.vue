<script setup lang="ts">

import type ChatMessage from '@/schemas/ChatMessage';
import type User from '@/schemas/User';
import { computed } from 'vue';

export interface ChatMessageBubbleProps {
  senderName?: User['name'];
  messageContent: ChatMessage['content'];
  dtmPosted: ChatMessage['dtmPosted'];
}
const props = defineProps<ChatMessageBubbleProps>();

const formattedMessage = computed(() => props.messageContent.replace(/\\n/g, '\n'));
const formattedTimestamp = computed(() => (
  Intl.DateTimeFormat('en-GB', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(props.dtmPosted ?? ''))
));

</script>

<template>
  <div :class="[
    $style.overallContainer,
    senderName && $style.isSent
  ]">
    <h1 v-if="senderName">
      {{ senderName }}
    </h1>
    <p :class="$style.content">
      {{ formattedMessage }}
    </p>
    <p :class="$style.timestamp">
      {{ formattedTimestamp }}
    </p>
  </div>
</template>

<style module>
.overallContainer {
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 16px 20px;
  overflow: clip;
  width: max(200px, 80%);
  flex-shrink: 0;
}
.overallContainer::before {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background-color: var(--color-body);
  opacity: 0.05;
}
.overallContainer.isSent::before {
  background-color: var(--color-body);
  opacity: 0.15;
}

.content {
  position: relative;
  font-size: var(--font-size-small);
  opacity: 0.8;
  white-space: pre-wrap;
  margin-bottom: 5px;
}
.timestamp {
  position: relative;
  font-size: var(--font-size-smaller);
  align-self: flex-end;
  opacity: 0.5;
}
</style>