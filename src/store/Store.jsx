import { createContext, useContext, useState } from "react";

const urlCategories = import.meta.env.VITE_API_URL_CATEGORIES;

export const Context = createContext({});
const Store = ({ children }) => {

  const initialStore = {
    cart: {
      items: [],
      total: 0
    },
    search: {
      query: '',
    }
  };

  const [store, setStore] = useState(initialStore);

  return (
    <Context.Provider value={{store, setStore}}>
      {children}
    </Context.Provider>
  );
}

export const useStore = () => {
  const store = useContext(Context);
  return store;
}

export default Store;
