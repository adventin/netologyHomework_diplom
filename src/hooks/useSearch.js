import { useStore } from '../store/Store';

export const useSearch = () => {
  const { store, setStore } = useStore();

  const setSearchQuery = (searchQuery) => {
    setStore({ ...store, cart: { ...store.cart, total: total } })
  }

  return {
    search: store.search,
    setSearchQuery
  };
}
