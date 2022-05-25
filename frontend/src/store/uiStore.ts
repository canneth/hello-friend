
import type User from '@/schemas/User';

interface ActiveChat {
  chatId: string;
  chatName: string;
  chatAvatar?: string;
}

const uiStore = {
  lastPathVisitedBeforeLogin: '/',

  setLastPathVisitedBeforeLogin(path: string) {
    this.lastPathVisitedBeforeLogin = path;
  },

  activeChat: null as ActiveChat | null,

  setActiveChat(chat: ActiveChat | null) {
    this.activeChat = chat;
  }
};

export default uiStore;