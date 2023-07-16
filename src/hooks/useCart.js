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

  const addToCart = (product, selectedSize, quantity) => {
    // проверяем существует ли
    const item = {
      skuSize: `${product.sku}_${selectedSize}`,
      ...product
    };
    debugger;

    setCartItems([...store.cart.items, item]);
  }

  return {
    cart: store.cart,
    setCartTotal,
    setCartItems,
    addToCart
  };
}
