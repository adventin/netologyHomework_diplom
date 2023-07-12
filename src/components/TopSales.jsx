import { useEffect, useState } from "react";
import { ProductCard } from "../components";
import { Loader } from "../components/common";
import { getTopSales } from "../service";

export function TopSales() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [items, setItems] = useState(null);

  useEffect(() => {
    getTopSales()
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      })
      .catch(error => { setError(error.message) });
  }, []);

  if (isLoading) {
    return (
      <section className="top-sales">
        <h2 className="text-center">Хиты продаж!</h2>
        <Loader />
      </section>
    );
  }

  if (items) {
    return (
      <section className="top-sales">
        <h2 className="text-center">Хиты продаж!</h2>
        {items && (
          <div className="row">
            {items.map((item) => (
              <div className="col-4" key={item.id}>
                <ProductCard product={item} />
              </div>
            ))}
          </div>
        )}
      </section>
    );
  }
}