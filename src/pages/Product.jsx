import { useParams } from "react-router-dom";
import { Header, Footer } from '../layout';
import { Banner, Loader } from '../components/common';
import { useEffect, useState } from "react";
import { getProduct } from "../service";
import { ProductPageCard } from "../components";

export default function Product(props) {
  const { productId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const onClickProductSize = (sizeId) => event => {
    event.preventDefault();
    event.target.className = event.target.className + " selected";
    setSelectedSize(sizeId);
  }

  useEffect(() => {
    getProduct(productId)
      .then((data) => {
        setProduct(data);
        setIsLoading(false);
      })
      .catch(error => { setError(error.message) });

  }, [productId]);
  console.log(productId);
  console.log(product);
  return (
    <>
      <Header />
      <main className="container">
        <div className="row">
          <div className="col">
            <Banner />
            {isLoading && <Loader />}
            {product && <ProductPageCard product={product} onClickProductSize={onClickProductSize} />}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}