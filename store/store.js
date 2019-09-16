import { action, observable } from "mobx";

class observableStore {
  @observable user = {};

  @action setUser(user) {
    this.user = user;
  }
}

const observable = new observableStore();
export default observableStore;
