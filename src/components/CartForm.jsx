import { useState } from "react";
import { useCart, useOrder } from "../hooks";
import { FormGroup, FormCheck, Loader } from "./common";
import { confirmOrder } from "../service";
import { useStore } from "../store/Store";

export function CartForm(props) {

  const { clearStore } = useStore();
  const { cart } = useCart();
  const { order, setOrderPhone, setOrderAddress, clearOrder } = useOrder();
  const [isProcessOrder, setIsProcessOrder] = useState(false);
  const [isFormChecked, setIsFormChecked] = useState(false);


  const isValidForm = () => {
    if (order.phone && order.address && isFormChecked) {
      return true;
    }
    return false;
  }

  const onSubmit = (event) => {
    event.preventDefault();

    if (isValidForm()) {
      setIsProcessOrder(true);

      const orderData = {
        owner: order,
        items: cart.items.map(item => {
          return { id: item.productData.id, price: item.productData.price, count: item.quantity }
        })
      };
      confirmOrder(orderData)
        .then(response => {
          clearStore();
        })
        .finally(() => {
          setIsProcessOrder(false);
        })
        .catch(error => console.log(error));
    }
  }

  if (isProcessOrder) {
    return (
      <Loader />
    )
  }

  return (
    <form className="card-body" onSubmit={onSubmit}>
      <FormGroup name="phone" label="Ваш телефон" value={order.phone} onChange={(event) => { setOrderPhone(event.target.value) }} />
      <FormGroup name="address" label="Адрес доставки" value={order.address} onChange={(event) => setOrderAddress(event.target.value)} />
      <FormCheck isFormChecked={isFormChecked} setIsFormChecked={setIsFormChecked} />
      <button type="submit" className="btn btn-outline-secondary" disabled={!isFormChecked}>Оформить</button>
    </form>
  );
}