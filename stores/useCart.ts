import { defineStore } from 'pinia';
import { useToast } from 'tailvue';
import { ProductDataType } from '~~/types/product';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [] as ProductDataType[] | any,
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

      if (this.cartItems !== undefined) {
        const filterIndex = this.cartItems.filter(
          (product: ProductDataType) => product.id === item.id
        );
        if (filterIndex.length > 0) return null;
        this.cartItems.push(item);
        return toast.show({
          message: 'Success add to cart',
          title: 'Success',
          type: 'success',
        });
      }

      this.cartItems.push(item);
      return toast.show({
        message: 'Success add to cart',
        title: 'Success',
        type: 'success',
      });
    },

    deleteAllCart() {
      const toast = useToast();
      this.cartItems = [];
      return toast.show({
        message: 'Success delete all cart',
        title: 'Success',
        type: 'success',
      });
    },
  },
  persist: true,
});
