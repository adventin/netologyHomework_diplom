import { ProductCard } from "../components";

export function ProductList({ products }) {

  return (
    <div className="row">
      {products && products.map((product) => (
        <div className="col-4" key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}

    </div>
  );
}