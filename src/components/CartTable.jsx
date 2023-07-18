import { Link } from "react-router-dom";
import { formatPrice } from "../formatters/formatterCurrency"
export function CartTable({ cart, removeFromCart }) {

  const columns = [
    { label: "#" },
    { label: "Название" },
    { label: "Размер" },
    { label: "Кол" },
    { label: "Стоимость" },
    { label: "Итого" },
    { label: "Действия" }
  ];

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          {columns.map((column, i) => (
            <th key={i} scope="col">{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {cart.items.map((item, i) => (
          <tr key={item.sku}>
            <td scope="row">{++i}</td>
            <td><Link to={`/catalog/${item.productData.id}`}>{item.productData.title}</Link></td>
            <td>{item.size}</td>
            <td>{item.quantity}</td>
            <td>{formatPrice(item.productData.price)} руб.</td>
            <td>{formatPrice((item.productData.price * item.quantity))} руб.</td>
            <td>
              <button className="btn btn-outline-danger btn-sm" onClick={() => removeFromCart(item.sku)}>Удалить</button>
            </td>
          </tr>
        ))}
        <tr>
          <td colSpan="5" className="text-right">Общая стоимость</td>
          <td>{formatPrice(cart.total)} руб.</td>
        </tr>
      </tbody>
    </table>
  );
}