import { Page, Layout } from '../layout';
import { CartTable } from '../components';
import { useCart } from "../hooks";
import { CartForm } from '../components/CartForm';

export default function Cart(props) {

  const { cart, removeFromCart} = useCart();

  return (
    <Page>
      <Layout>
        <>
          <section className="cart">
            <h2 className="text-center">Корзина</h2>
            <CartTable cart={cart} removeFromCart={removeFromCart} />
          </section>
          <section className="order">
            <h2 className="text-center">Оформить заказ</h2>
            <div className="card" style={{ maxWidth: '30rem', margin: '0 auto' }}>
              <CartForm />
            </div>
          </section>
        </>
      </Layout>
    </Page>
  );
}