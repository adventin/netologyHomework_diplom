import { useState, useEffect } from "react";
import { ProductCategories, ProductList } from "../components";
import { Loader } from "./common";
import { getCategories, getProducts } from "../service";
import { useSearch } from "../hooks";
export function ProductCatalog({ children }) {
  const { searchQuery, setSearchQuery } = useSearch();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleShowMore, setVisibleShowMore] = useState(true);
  const [activeCategory, setActiveCategory] = useState(0);
  const [offset, setOffset] = useState(0);
  const defaultCategory = { id: 0, title: 'Все' };

  const onClickCategory = (categoryId) => event => {
    event.preventDefault();
    setActiveCategory(categoryId);
    setOffset(0);
    getProducts();
  };

  const onClickShowMore = () => {
    setOffset(offset + 6);
  };

  useEffect(() => {
    setOffset(0);
  }, [searchQuery])

  useEffect(() => {
    const getData = async () => {
      Promise.all([
        getCategories(),
        getProducts(activeCategory, offset, searchQuery)
      ])
        .then(([dataCategories, dataProducts]) => {
          const productsTmp = offset ? [...products, ...dataProducts] : dataProducts;

          setVisibleShowMore(!Boolean(dataProducts.length < 6));
          setCategories([defaultCategory, ...dataCategories]);
          setProducts(productsTmp);
        })
        .finally(() => setIsLoading(false))
        .catch(error => { setError(error.message) });
    };

    getData();
  }, [activeCategory, offset, searchQuery]);



  if (isLoading) {
    return (
      <section className="top-sales">
        <h2 className="text-center">Каталог</h2>
        <Loader />
      </section>
    );
  }

  if (categories && products) {
    return (
      <section className="catalog">
        <h2 className="text-center">Каталог</h2>
        {children}
        <ProductCategories items={categories} activeCategory={activeCategory} onClickCategory={onClickCategory} />
        <ProductList products={products} />
        {visibleShowMore && (
          <div className="text-center">
            <button className="btn btn-outline-primary" onClick={onClickShowMore}>Загрузить ещё</button>
          </div>
        )}
      </section>
    );
  }
}