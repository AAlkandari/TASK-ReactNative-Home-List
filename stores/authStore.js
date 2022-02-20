import { makeAutoObservable } from "mobx";
import decode from "jwt-decode";
import api from "./api";
import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this, {});
  }

  setUser = async (token) => {
    await AsyncStorage.setItem("myToken", token);
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  signUp = async (user) => {
    try {
      const response = await api.post("/signup", user);
      this.setUser(response.data.token);
      console.log(
        "🚀 ~ file: authStore.js ~ line 23 ~ AuthStore ~ signUp= ~ response.data.token",
        response.data.token
      );
    } catch (error) {
      console.log(error);
    }
  };

  signIn = async (user) => {
    try {
      const response = await api.post("/signin", user);
      this.setUser(response.data.token);
      console.log(
        "🚀 ~ file: authStore.js ~ line 36 ~ AuthStore ~ signIn= ~ response.data.token",
        response.data.token
      );
      //   navigation.goBack();
      console.log(this.user);
    } catch (error) {
      console.log(error);
    }
  };

  signout = async () => {
    delete api.defaults.headers.common.Authorization;
    this.user = null;
    await AsyncStorage.removeItem("myToken");
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");
    if (token) {
      const currentTime = Date.now();
      const exp = decode(token).exp;
      if (exp > currentTime) {
        this.setUser(token);
      } else {
        this.signout();
      }
    } else {
      this.signout();
    }
  };
}
const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
