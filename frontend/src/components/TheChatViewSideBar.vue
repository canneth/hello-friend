<script setup lang="ts">

import { computed, ref } from 'vue';
import CommonSearchBar from '@/components/common/CommonSearchBar.vue';
import useUserStore from '@/composables/useUserStore';
import ChatListing from '@/components/chat/ChatListing.vue';
import backendAxios from '@/globals/configuredAxios';
import type DirectChatMessage from '@/schemas/DirectChatMessage';
import type User from '@/schemas/User';

const userStore = useUserStore();

const displayName = computed(() => {
  return userStore.value.user?.name.split(' ')[0];
});

const directChatList = ref<{
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
    const chatPartner = directChatPartnerList.find(chatPartner => chatPartner.userId === message.receiverUserId || chatPartner.userId === message.senderUserId)!;
    return {
      chatName: chatPartner.name,
      avatarSrc: chatPartner.avatarSrc,
      lastMessage: message
    };
  }));
  console.log('directChatMessageList', directChatMessageList);
  console.log('directChatPartnerUserIdList', directChatPartnerUserIdList);
  console.log('directChatPartnerList', directChatPartnerList);
  console.log(directChatList.value.map(chat => chat.chatName));
})();

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
      <ChatListing v-for="{ chatName, lastMessage, avatarSrc } in directChatList" :chat-name="chatName" :last-message="lastMessage" :avatar-src="avatarSrc" />
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
  background-color: var(--color-primary-base);
  box-shadow: var(--box-shadow-standard);
  padding: 16px 20px;
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
  background-color: var(--color-contrast-light);
  caret-color: var(--color-primary-base);
  color: var(--color-body);
  transition: border-color 100ms ease-out;
  font-size: var(--font-size-small);
}

.chatListContainer {
  position: relative;
  overflow-y: scroll;
}
</style>