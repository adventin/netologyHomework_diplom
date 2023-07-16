import { useStore } from '../store/Store';

export const useSearch = () => {
  const { store, setStore } = useStore();

  const setSearchQuery = (searchQuery = '') => {
    setStore({ ...store, search: { query: searchQuery } })
  }  

  return {
    searchQuery: store.search.query,
    setSearchQuery
  };
}
