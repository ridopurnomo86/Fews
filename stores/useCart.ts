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
      const products = getLocalStorage('cart-items');

      if (products !== undefined) {
        const filterIndex = products.filter((product: ProductDataType) => product.id === item.id);
        if (filterIndex.length > 0) return null;
        setLocalStorage('cart-items', [...products, item]);
        return toast.show({
          message: 'Success add to cart',
          title: 'Success',
          type: 'success',
        });
      }

      setLocalStorage('cart-items', [item]);
      return toast.show({
        message: 'Success add to cart',
        title: 'Success',
        type: 'success',
      });
    },
    deleteAllCart() {
      const toast = useToast();
      setLocalStorage('cart-items', []);
      return toast.show({
        message: 'Success delete all cart',
        title: 'Success',
        type: 'success',
      });
    },
  },
});
