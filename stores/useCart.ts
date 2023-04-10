import { defineStore } from 'pinia';
import { useToast } from 'tailvue';
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
    addToCart(item: CartProductDataType) {
      const toast = useToast();

      if (this.cartItems !== undefined) {
        const filterIndex = this.cartItems.filter(
          (product: CartProductDataType) => product.id === item.id
        );
        if (filterIndex.length > 0) return null;
        this.cartItems.push({ ...item, quantity: 1, totalPrice: item.price });
        return toast.show({
          message: 'Success add to cart',
          title: 'Success',
          type: 'success',
        });
      }

      this.cartItems.push({ ...item, quantity: 1, totalPrice: item.price });
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

    deleteCartById(id: CartProductDataType['id']) {
      const toast = useToast();
      const filterItems = this.cartItems.filter((item: CartProductDataType) => item.id !== id);
      this.cartItems = filterItems;
      return toast.show({
        message: 'Success delete cart',
        title: 'Success',
        type: 'success',
      });
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
