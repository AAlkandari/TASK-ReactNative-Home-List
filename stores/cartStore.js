import { makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";

class CartStore {
  constructor() {
    makeAutoObservable(this);
  }

  items = [
    {
      product: {
        _id: "6182a8b31bd7fa38942fdf23",
        name: "Cookie",
        price: 5,
        image:
          "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg",
      },
      quantity: 5,
    },
    {
      product: {
        _id: "6182a8b31bd7fa46652fdf88",
        name: "Another cookie",
        price: 15,
        image:
          "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg",
      },
      quantity: 3,
    },
  ];

  fetchCart = async () => {
    const items = await AsyncStorage.getItem("myCart");
    this.items = items ? JSON.parse(items) : [];
    this.isLoading = false;
  };

  addItemToCart = async (product, quantity) => {
    const findItem = this.items.find(
      (item) => item.product._id === product._id
    );
    if (findItem) {
      if (quantity === 0)
        this.items = this.items.filter((item) => item.quantity !== 0);
      findItem.quantity = quantity;
    } else {
      const addItem = { product, quantity };
      this.items.push(addItem);
      await AsyncStorage.setItem("MyCart", JSON.stringify(this.items));
    }
  };

  deleteItemFromCart = async (productId) => {
    this.items = this.items.filter((item) => item.product._id !== productId);
    await AsyncStorage.setItem("MyCart", JSON.stringify(this.items));
  };

  get totalQuantity() {
    let total = 0;
    this.items.forEach((item) => (total += item.quantity));
    return total;
  }

  checkout = async () => {
    this.items = [];
    alert("Thank you for buying katakeeet ! :D");
    await AsyncStorage.removeItem("myCart");
  };
}

const cartStore = new CartStore();
cartStore.fetchCart();
export default cartStore;
