<script setup lang="ts">

import useUserStore from '@/composables/useUserStore';
import type DirectChatMessage from '@/schemas/DirectChatMessage';
import { computed } from 'vue';

const props = defineProps<{
  message: DirectChatMessage;
  type: 'sent' | 'received'
}>()

const userStore = useUserStore();

const formattedMessage = computed(() => props.message.content.replace(/\\n/g, '\n'));
const formattedTimestamp = computed(() => Intl.DateTimeFormat('en-GB', { timeStyle: 'short' }).format(new Date(props.message.dtmPosted)));

</script>

<template>
  <div :class="[
    $style.overallContainer,
    type === 'received' && $style.isReceived,
    type === 'sent' && $style.isSent
  ]">
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
  gap: 5px;
  border-radius: 5px;
  padding: 16px 20px;
  overflow: clip;
  width: max(200px, 80%);
}
.overallContainer::before {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
}
.overallContainer.isReceived::before {
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
}
.timestamp {
  position: relative;
  font-size: var(--font-size-smaller);
  align-self: flex-end;
  opacity: 0.5;
}
</style>