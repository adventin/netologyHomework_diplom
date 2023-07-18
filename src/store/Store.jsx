import { createContext, useContext, useEffect, useState } from "react";

const initialStore = {
  cart: {
    items: [],
    total: 0
  },
  search: {
    query: '',
  },
  order: {
    phone: '',
    address: '',
  }
};

export const Context = createContext({});
const Store = ({ children }) => {
  const [store, setStore] = useState({ ...initialStore, cart: JSON.parse(localStorage.getItem('cart')) || initialStore.cart });

  const clearStore = () => {
    localStorage.removeItem('cart');
    setStore({ ...initialStore });
  };
  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(store.cart));
  }, [store.cart]);

  return (
    <Context.Provider value={{ store, setStore, clearStore }}>
      {children}
    </Context.Provider>
  );
}

export const useStore = () => {
  const store = useContext(Context);
  return store;
}

export { initialStore };
export default Store;

