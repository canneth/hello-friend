
const uiStore = {
  lastPathVisitedBeforeLogin: '/',

  setLastPathVisitedBeforeLogin(path: string) {
    this.lastPathVisitedBeforeLogin = path;
  }
};

export default uiStore;