import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks";

export function ProductPageCard({ product, quantity, selectedSize, onClickProductSize, onClickIncrementQuantity, onClickDecrementQuantity }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const onClickAddToCart = () => {
    addToCart(product, selectedSize, quantity);
    navigate("/cart");
  }

  return (
    <section className="catalog-item">
      <h2 className="text-center">{product.title}</h2>
      <div className="row">
        <div className="col-5">
          <img src={product.images[0]} className="img-fluid" alt={product.title} />
        </div>
        <div className="col-7">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>Артикул</td>
                <td>{product.sku}</td>
              </tr>
              <tr>
                <td>Производитель</td>
                <td>{product.manufacturer}</td>
              </tr>
              <tr>
                <td>Цвет</td>
                <td>{product.color}</td>
              </tr>
              <tr>
                <td>Материалы</td>
                <td>{product.material}</td>
              </tr>
              <tr>
                <td>Сезон</td>
                <td>{product.season}</td>
              </tr>
              <tr>
                <td>Повод</td>
                <td>{product.reason}</td>
              </tr>
            </tbody>
          </table>
          <div className="text-center">
            <p>Размеры в наличии:
              {product.sizes && product.sizes.filter(sizeItem => sizeItem.available).map((sizeItem) => (
                <span key={sizeItem.size} className={`catalog-item-size `} onClick={onClickProductSize(sizeItem.size)}>{sizeItem.size}</span>
              ))}
            </p>
            {product.sizes &&
              <p>Количество:
                <span className="btn-group btn-group-sm pl-2">
                  <button className="btn btn-secondary" onClick={onClickDecrementQuantity} >-</button>
                  <span className="btn btn-outline-primary">{quantity}</span>
                  <button className="btn btn-secondary" onClick={onClickIncrementQuantity} >+</button>
                </span>
              </p>
            }

          </div>
          {product.sizes &&
            <button className="btn btn-danger btn-block btn-lg" disabled={!selectedSize} onClick={onClickAddToCart}>В корзину</button>
          }
        </div>
      </div>
    </section>
  );
}