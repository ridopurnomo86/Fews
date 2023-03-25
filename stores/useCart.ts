import { defineStore } from 'pinia';
import { ProductDataType } from '~~/types/product';

const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [] as ProductDataType[],
    carts: [],
  }),
  getters: {},
});

export default useCartStore;
