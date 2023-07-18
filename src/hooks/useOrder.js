import { useStore } from '../store/Store';

export const useOrder = () => {
  const { store, setStore } = useStore();

  const setOrderPhone = (phone) => {
    setStore({ ...store, order: { ...store.order, phone: phone } })
  }

  const setOrderAddress = (address) => {
    setStore({ ...store, order: { ...store.order, address: address } })
  }

  return {
    order: store.order,
    setOrderPhone,
    setOrderAddress,
    confirm,
  };
}
