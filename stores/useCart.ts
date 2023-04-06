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
        this.cartItems.push({ ...item, quantity: 1 });
        return toast.show({
          message: 'Success add to cart',
          title: 'Success',
          type: 'success',
        });
      }

      this.cartItems.push({ ...item, quantity: 1 });
      return toast.show({
        message: 'Success add to cart',
        title: 'Success',
        type: 'success',
      });
    },

    deleteAllCart() {
      const toast = useToast();
      if (this.cartItems.length > 0) {
        this.cartItems = [];
        return toast.show({
          message: 'Success delete all cart',
          title: 'Success',
          type: 'success',
        });
      }
      return null;
    },

    deleteCartById(id: ProductDataType['id']) {
      const toast = useToast();
      const filterItems = this.cartItems.filter((item: ProductDataType) => item.id !== id);
      this.cartItems = filterItems;
      return toast.show({
        message: 'Success delete cart',
        title: 'Success',
        type: 'success',
      });
    },

    increaseQuantity(id: number) {
      const selectedItem = this.cartItems.find((product: ProductDataType) => product.id === id);
      if (selectedItem.quantity > 0) selectedItem.quantity += 1;
      return null;
    },

    decreaseQuantity(id: number) {
      const selectedItem = this.cartItems.find((product: ProductDataType) => product.id === id);
      if (selectedItem.quantity > 1 && selectedItem.quantity !== 1) selectedItem.quantity -= 1;
      return null;
    },
  },
  persist: true,
});
