<script setup lang="ts">

import { computed, ref } from 'vue';
import CommonSearchBar from '@/components/common/CommonSearchBar.vue';
import useUserStore from '@/composables/useUserStore';
import ChatListing from '@/components/chat/ChatListing.vue';
import backendAxios from '@/globals/configuredAxios';
import type DirectChatMessage from '@/schemas/DirectChatMessage';
import type User from '@/schemas/User';
import useUIStore from '@/composables/useUIStore';

const userStore = useUserStore();

const displayName = computed(() => {
  return userStore.value.user?.name.split(' ')[0];
});

/* Load chats */

const directChatList = ref<{
  chatId: string;
  chatName: User['name'];
  avatarSrc: User['avatarSrc'];
  lastMessage: DirectChatMessage;
}[]>([]);

(async () => {
  const { data: directChatMessageList } = await backendAxios.get<DirectChatMessage[]>(
    `/api/directChatMessages
      ?involvedUserId=${userStore.value.user!.userId}
      &latest=true
    `.replace(/\s/g, '')
  );
  const directChatPartnerUserIdList = directChatMessageList.map(message => {
    const currentUserId = userStore.value.user!.userId;
    return [message.receiverUserId, message.senderUserId].find(id => id !== currentUserId)!;
  });
  const { data: directChatPartnerList } = await backendAxios.get<
    (Partial<User> & Pick<User, 'userId' | 'name' | 'avatarSrc'>)[]
  >(
    `/api/users
      ?userIds=${directChatPartnerUserIdList.join(',')}
      &fields=userId,name,avatarSrc
    `.replace(/\s/g, '')
  );
  directChatList.value = (directChatMessageList.map(message => {
    const chatId = [message.senderUserId, message.receiverUserId].sort((a, b) => a.localeCompare(b)).join(',');
    const chatPartner = directChatPartnerList.find(chatPartner => chatPartner.userId === message.receiverUserId || chatPartner.userId === message.senderUserId)!;
    return {
      chatId,
      chatName: chatPartner.name,
      avatarSrc: chatPartner.avatarSrc,
      lastMessage: message
    };
  }));
})();

/* Selecting active chat */

const uiStore = useUIStore();

function clickHandlerChatListing(e: MouseEvent, id: string) {
  e.preventDefault();
  const selectedChat = directChatList.value.find(chatListing => chatListing.chatId === id);
  if (!selectedChat) throw new Error('No such chat exists with that chatId!');
  if (selectedChat.chatId === uiStore.value.activeChat?.chatId) return;
  const activeChat = {
    chatId: selectedChat.chatId,
    chatName: selectedChat.chatName,
    chatAvatar: selectedChat.avatarSrc,
    participantIds: [selectedChat.lastMessage.senderUserId, selectedChat.lastMessage.receiverUserId]
  };
  uiStore.value.setActiveChat(activeChat);
}

</script>

<template>
  <div :class="$style.overallContainer">
    <header :class="$style.header">
      <div :class="$style.profileBar">
        <div :class="$style.avatarContainer">
          <img
            :class="$style.avatarImg"
            :src="userStore.user?.avatarSrc ?? 'placeholder-avatar.png'"
            object-fit="cover" />
        </div>
        <p :class="$style.displayName">
          {{ displayName }}
        </p>
      </div>
      <CommonSearchBar :class="$style.searchBar" />
    </header>
    <div :class="$style.chatListContainer">
      <ChatListing
        v-for="{ chatId, chatName, lastMessage, avatarSrc } in directChatList"
        :key="chatId"
        :chat-id="chatId"
        :chat-name="chatName"
        :last-message="lastMessage"
        :avatar-src="avatarSrc"
        @click="clickHandlerChatListing" />
    </div>
  </div>
</template>

<style module>
.overallContainer {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 300px;
  background-color: var(--color-background);
  box-shadow: var(--box-shadow-standard);
  overflow: clip;
}
.header {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  box-shadow: var(--box-shadow-standard);
  padding: 16px 20px;
}
.header::before {
  position: absolute;
  content: '';
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: var(--color-body);
  opacity: 0.05;
}
.profileBar {
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
}
.avatarContainer {
  position: relative;
  border-radius: 50%;
  overflow: clip;
  width: 50px;
  background: white;
  aspect-ratio: 1 / 1;
}
.avatarImg {
  position: relative;
  width: 100%;
  height: 100%;
}
.displayName {
  color: var(--color-body);
}
.searchBar {
  position: relative;
  width: 100%;
  caret-color: var(--color-primary-base);
  color: var(--color-body);
  transition: border-color 100ms ease-out;
  font-size: var(--font-size-small);
}
.searchBar::before {
  position: absolute;
  content: '';
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: var(--color-body);
  opacity: 0.05;
}

.chatListContainer {
  position: relative;
  overflow-y: scroll;
}
</style>