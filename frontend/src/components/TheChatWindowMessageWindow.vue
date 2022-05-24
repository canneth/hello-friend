<script setup lang="ts">

import { ref, watch, watchEffect } from 'vue';
import type User from '@/schemas/User';
import type DirectChatMessage from '@/schemas/DirectChatMessage';
import backendAxios from '@/globals/configuredAxios';
import ChatMessage from './chat/ChatMessage.vue';
import useUserStore from '@/composables/useUserStore';

const props = defineProps<{
  participantIds: User['userId'][];
}>();

const messageList = ref<DirectChatMessage[]>([]);

watchEffect(async () => {
  const { data: messages } = await backendAxios.get<DirectChatMessage[]>(
    `/api/directChatMessages?
      betweenUserIds=${props.participantIds.join(',')}
    `.replace(/\s/g, '')
  );
  messageList.value = messages;
});

const userStore = useUserStore();

</script>

<template>
  <div :class="$style.overallContainer">
    <ChatMessage
      v-for="message of messageList"
      :message="message"
      :type="userStore.user?.userId === message.receiverUserId ? 'received' : 'sent'"
      :class="[
        $style.chatMessage,
        userStore.user?.userId === message.receiverUserId ? $style.isReceived : $style.isSent
      ]" />
  </div>
</template>

<style module>
.overallContainer {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  width: 100%;
  height: 100%;
  padding: 0px 20px;
  overflow-y: scroll;
  padding: 0px clamp(10px, 20%, 300px);
}
.chatMessage {
  position: relative;
}
.chatMessage.isReceived {
  align-self: flex-start;
}
.chatMessage.isSent {
  align-self: flex-end;
}
</style>