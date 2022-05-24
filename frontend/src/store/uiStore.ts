
import type User from '@/schemas/User';

interface Chat {
  chatId: string;
  chatName: string;
  chatAvatar: string | null;
  participantIds: User['userId'][];
}

const uiStore = {
  lastPathVisitedBeforeLogin: '/',

  setLastPathVisitedBeforeLogin(path: string) {
    this.lastPathVisitedBeforeLogin = path;
  },

  activeChat: null as Chat | null,

  setActiveChat(chat: Chat | null) {
    this.activeChat = chat;
  }
};

export default uiStore;