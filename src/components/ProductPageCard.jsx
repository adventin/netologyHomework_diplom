export function ProductPageCard({ product, onClickProductSize }) {

  console.log("product", product);

  //   {
  //     "id": 24,
  //     "category": 13,
  //     "title": "Туфли на выход",
  //     "images": [
  //         "https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/outgoing_shoes.jpg",
  //         "https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/outgoing_shoes_2.jpg"
  //     ],
  //     "sku": "1000004",
  //     "manufacturer": "Dolce & Gabbana",
  //     "color": "Черный",
  //     "material": "Кожа",
  //     "reason": "Высокая мода",
  //     "season": "Лето",
  //     "heelSize": "8 см.",
  //     "price": 2500,
  //     "sizes": [
  //         {
  //             "size": "14 US",
  //             "available": true
  //         },
  //         {
  //             "size": "18 US",
  //             "available": false
  //         }
  //     ]
  // }

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
              {/* <span className="catalog-item-size selected">18 US</span> */}
              
            </p>
            {product.sizes &&
              <p>Количество:
                <span className="btn-group btn-group-sm pl-2">
                  <button className="btn btn-secondary">-</button>
                  <span className="btn btn-outline-primary">1</span>
                  <button className="btn btn-secondary">+</button>
                </span>
              </p>
            }

          </div>
          {product.sizes &&
            <button className="btn btn-danger btn-block btn-lg">В корзину</button>
          }
        </div>
      </div>
    </section>
  );
}