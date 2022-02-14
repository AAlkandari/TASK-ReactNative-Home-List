import { makeAutoObservable, configure } from "mobx";
import api from "./api";

configure({enforceActions: "never",});

class ShopStore {
  constructor() {
    makeAutoObservable(this);
  }
  shops = [];
  isLoading = true; 
  
  fetchShops = async () => {
    try {
      const res = await api.get("/shops");
      this.shops = res.data;
      this.isLoading = false;
    } catch (error) {
      console.log(
        "🚀 ~ file: shopStore.js ~ line 15 ~ ShopStore ~ fetchShops= ~ error",
        error
      );
    }
  };
}

const shopStore = new ShopStore();
shopStore.fetchShops();
export default shopStore;