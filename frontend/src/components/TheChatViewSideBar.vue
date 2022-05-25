<script setup lang="ts">

import { computed, ref } from 'vue';
import CommonSearchBar from '@/components/common/CommonSearchBar.vue';
import useUserStore from '@/composables/useUserStore';
import ChatListing from '@/components/chat/ChatListing.vue';
import backendAxios from '@/globals/configuredAxios';
import useUIStore from '@/composables/useUIStore';
import type ChatMessage from '@/schemas/ChatMessage';
import type User from '@/schemas/User';
import type ChatMembership from '@/schemas/ChatMembership';
import type Chat from '@/schemas/Chat';

const userStore = useUserStore();

const displayName = computed(() => {
  return userStore.value.user?.name.split(' ')[0];
});

/* Load chats */

interface ChatListing {
  chatId: Chat['chatId'];
  chatName: string;
  avatarSrc?: User['avatarSrc'] | Chat['avatarSrc'];
  latestMessage?: ChatMessage;
}

const sideBarChatList = ref<ChatListing[]>([]);

(async () => {
  const selfUserId = userStore.value.user!.userId;
  const { data: selfMembershipList } = await backendAxios.get<ChatMembership[]>(
    `/api/chatMemberships?
      userIds=${selfUserId}
    `.replace(/\s/g, '')
  );
  const chatIdList = selfMembershipList.map(membership => membership.chatId);
  const { data: chatList } = await backendAxios.get<Chat[]>(
    `/api/chats?
      chatIds=${chatIdList.join(',')}
    `.replace(/\s/g, '')
  );
  const { data: latestMessageList } = await backendAxios.get<ChatMessage[]>(
    `/api/chatMessages?
      chatIds=${chatIdList.join(',')}
      &latest=true
    `.replace(/\s/g, '')
  );
  /* Get info needed to get avatarSrc for direct chats */
  const { data: othersMembershipList } = await backendAxios.get<ChatMembership[]>(
    `/api/chatMemberships?
      chatIds=${chatIdList.join(',')}
      &excludeUserIds=${selfUserId}
    `.replace(/\s/g, '')
  );
  const othersUserIdList = othersMembershipList.map(membership => membership.userId);
  const { data: othersUserList } = await backendAxios.get<
    Pick<User, 'userId' | 'name' | 'avatarSrc'>[]
  >(
    `/api/users?
      fields=userId,name,avatarSrc
      &userIds=${othersUserIdList}
    `.replace(/\s/g, '')
  );
  sideBarChatList.value = chatList.map(chat => {
    const chatId = chat.chatId;
    const latestMessage = latestMessageList.find(message => message.chatId === chat.chatId);
    switch (chat.type) {
      case 'group': {
        if (!chat.name) throw new Error(`Chat of type 'group' does not have a name, which should not be possible!`);
        return {
          chatId,
          chatName: chat.name,
          avatarSrc: chat.avatarSrc,
          latestMessage
        };
      }
      case 'direct': {
        const chatPartnerMembership = othersMembershipList.find(membership => membership.chatId === chat.chatId);
        const chatPartnerUser = othersUserList.find(user => user.userId === chatPartnerMembership?.userId);
        if (!chatPartnerUser) throw new Error(`chatPartnerUser should always be found in othersUserList, but wasn't!`);
        return {
          chatId,
          chatName: chatPartnerUser.name,
          avatarSrc: chatPartnerUser.avatarSrc,
          latestMessage
        }
      }
    }
  });
})();

/* Active chat selection stuff */

const uiStore = useUIStore();

function clickHandlerChatListing(e: MouseEvent, id: string) {
  e.preventDefault();
  const selectedChat = sideBarChatList.value.find(chatListing => chatListing.chatId === id);
  if (!selectedChat) throw new Error('selectedChat should always be present in sideBarChatList, but was not found!');
  if (selectedChat.chatId === uiStore.value.activeChat?.chatId) return;
  const activeChat = {
    chatId: selectedChat.chatId,
    chatName: selectedChat.chatName,
    chatAvatar: selectedChat.avatarSrc
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
        v-for="{ chatId, chatName, latestMessage, avatarSrc } in sideBarChatList"
        :key="chatId"
        :chat-id="chatId"
        :chat-name="chatName"
        :latest-message="latestMessage"
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