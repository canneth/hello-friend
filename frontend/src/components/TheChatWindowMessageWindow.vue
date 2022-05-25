<script setup lang="ts">

import { computed, ref, watchEffect } from 'vue';
import type ChatMessage from '@/schemas/ChatMessage';
import ChatMessageBubble, { type ChatMessageBubbleProps } from './chat/ChatMessageBubble.vue';
import useUserStore from '@/composables/useUserStore';
import backendAxios from '@/globals/configuredAxios';
import useUIStore from '@/composables/useUIStore';
import type ChatMembership from '@/schemas/ChatMembership';
import type User from '@/schemas/User';

const props = defineProps<{
  messages: ChatMessage[];
}>();

const userStore = useUserStore();
const selfUserId = computed(() => userStore.value.user?.userId);

const uiStore = useUIStore();
const chatId = computed(() => uiStore.value.activeChat?.chatId);

const formattedMessages = ref<ChatMessageBubbleProps[]>([]);

watchEffect(async () => {
  const { data: othersMembershipList } = await backendAxios.get<ChatMembership[]>(
    `/api/chatMemberships?
      chatIds=${chatId.value}
      &excludeUserIds=${selfUserId.value}
    `.replace(/\s/g, '')
  );
  const othersUserIdList = othersMembershipList.map(membership => membership.userId);
  const { data: othersUserList } = await backendAxios.get<
    Pick<User, 'userId' | 'name'>[]
  >(
    `/api/users?
      fields=userId,name
      &userIds=${othersUserIdList}
    `.replace(/\s/g, '')
  );
  formattedMessages.value = props.messages.map(message => {
    const senderName = othersUserList.find(otherUser => otherUser.userId === message.userId)?.name;
    const messageContent = message.content;
    const dtmPosted = message.dtmPosted;
    return {
      senderName,
      messageContent,
      dtmPosted
    };
  });
  formattedMessages.value.sort((a, b) => (new Date(a.dtmPosted!)).getTime() - (new Date(b.dtmPosted!)).getTime());
});

</script>

<template>
  <div :class="$style.overallContainer">
    <div :class="$style.scrollableContainer">
      <ChatMessageBubble
        v-for="{ senderName, messageContent, dtmPosted } of formattedMessages"
        :sender-name="senderName"
        :message-content="messageContent"
        :dtm-posted="dtmPosted"
        :class="[
          $style.chatMessage,
          senderName ? $style.isReceived : $style.isSent
        ]" />
    </div>
  </div>
</template>

<style module>
.overallContainer {
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: 0px clamp(10px, 20%, 300px);
}
.scrollableContainer {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: flex-end;
  gap: 20px;
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