import { defineStore } from 'pinia';
import { CartProductDataType } from '~~/types/product';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [] as CartProductDataType[] | any,
  }),
  getters: {
    countCartItems(): number {
      return this.cartItems.length;
    },
    getCartItems(): CartProductDataType[] {
      return this.cartItems;
    },
    countTotalPrice(): number | null {
      const price = this.cartItems?.map((item: CartProductDataType) => item.totalPrice);
      if (price || price.length > 0) {
        const totalPrice = price.reduce((total: number, num: number) => total + num, 0);
        return totalPrice;
      }
      return 0;
    },
  },
  actions: {
    addToCart(item: CartProductDataType, event: Event) {
      event.stopPropagation();

      if (this.cartItems !== undefined) {
        const filterIndex = this.cartItems.filter(
          (product: CartProductDataType) => product.id === item.id
        );
        if (filterIndex.length > 0) return null;
      }

      return this.cartItems.push({ ...item, quantity: 1, totalPrice: item.price });
    },

    deleteAllCart() {
      if (this.cartItems.length > 0) {
        this.cartItems = [];
      }
      return null;
    },

    deleteCartById(id: CartProductDataType['id']) {
      const filterItems = this.cartItems.filter((item: CartProductDataType) => item.id !== id);
      this.cartItems = filterItems;
    },

    increaseQuantity(id: number) {
      const selectedItem = this.cartItems.find((product: CartProductDataType) => product.id === id);
      if (selectedItem.quantity > 0) {
        selectedItem.quantity += 1;
        selectedItem.totalPrice = selectedItem.price * selectedItem.quantity;
      }
      return null;
    },

    decreaseQuantity(id: number) {
      const selectedItem = this.cartItems.find((product: CartProductDataType) => product.id === id);
      if (selectedItem.quantity > 1 && selectedItem.quantity !== 1) {
        selectedItem.quantity -= 1;
        selectedItem.totalPrice = selectedItem.price * selectedItem.quantity;
      }
      return null;
    },
  },
  persist: true,
});
