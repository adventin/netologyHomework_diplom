import { useStore } from '../store/Store';

export const useCart = () => {
  const { store, setStore } = useStore();

  const setCartTotal = (total) => {
    setStore({ ...store, cart: { ...store.cart, total: total } })
  }

  const setCartItems = (cartItems) => {
    // todo: reduce
    setStore({ ...store, cart: { ...store.cart, items: cartItems } })
  }

  return {
    cart: store.cart,
    setCartTotal,
    setCartItems
  };
}
