import { defineStore } from 'pinia';
import { useToast } from 'tailvue';
import { getLocalStorage, setLocalStorage } from '~~/modules/storage';
import { ProductDataType } from '~~/types/product';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: getLocalStorage('cart-items', []),
  }),
  getters: {
    countCartItems(): number {
      return this.cartItems.length;
    },
    getCartItems(): ProductDataType[] {
      return this.cartItems;
    },
  },
  actions: {
    addToCart(item: ProductDataType) {
      const toast = useToast();
      const index = this.cartItems.filter((product: ProductDataType) => product.id === item.id);

      if (index.length > 0 || this.cartItems !== null) return null;

      const existingItems = getLocalStorage('cart-items');
      existingItems.push(item);

      setLocalStorage('cart-items', existingItems);

      return toast.show({
        message: 'Success add to cart',
        title: 'Success',
        type: 'success',
      });
    },
  },
});
