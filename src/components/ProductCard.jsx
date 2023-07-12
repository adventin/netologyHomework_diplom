import { formatPrice } from "../formatters/formatterCurrency"

export function ProductCard({ product }) {
  return (
    <div className="card catalog-item-card">
      <img src={product.images[0]} className="card-img-top img-fluid" alt="Босоножки 'MYER'" />
      <div className="card-body">
        <p className="card-text">{product.title}</p>
        <p className="card-text">{formatPrice(product.price)} руб.</p>
        <a href={`/catalog/${product.id}`} className="btn btn-outline-primary">Заказать</a>
      </div>
    </div>
  );
}