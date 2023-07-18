import { useStore } from '../store/Store';

export const useCart = () => {
  const { store, setStore } = useStore();

  const setCartTotal = (total) => {
    setStore({ ...store, cart: { ...store.cart, total: total } })
  }

  const setCartItems = (cartItems) => {
    const totalPrice = cartItems.reduce((totalPrice, item) => totalPrice + item.productData.price * item.quantity, 0);
    setStore({ ...store, cart: { ...store.cart, items: cartItems } });
    setCartTotal(totalPrice);
  }

  const addToCart = (product, selectedSize, quantity) => {
    let existingItemIndex = store.cart.items.findIndex(item => item.sku === `${product.sku}_${selectedSize}`);

    if (!~existingItemIndex) {
      store.cart.items.push({
        sku: `${product.sku}_${selectedSize}`,
        size: selectedSize,
        quantity: quantity,
        productData: product
      });
    } else {
      store.cart.items[existingItemIndex].quantity += quantity;
    }
    setCartItems(store.cart.items);
  }

  const removeFromCart = (sku) => {
    store.cart.items = store.cart.items.filter(item => item.sku !== sku);
    setCartItems(store.cart.items);
  }

  return {
    cart: store.cart,
    setCartItems,
    removeFromCart,
    addToCart
  };
}
