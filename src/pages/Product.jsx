import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Page, Layout } from '../layout';
import { ProductPageCard } from "../components";
import { Loader } from '../components/common';
import { getProduct } from "../service";

export default function Product(props) {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const onClickIncrementQuantity = () => {
    if (quantity === 10) return;

    setQuantity(quantity + 1);
  };
  const onClickDecrementQuantity = () => {
    setQuantity((quantity - 1) > 0 ? quantity - 1 : 1)
  };

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

  return (
    <Page>
      <Layout>
        {isLoading && <Loader />}
        {product && <ProductPageCard product={product} quantity={quantity} selectedSize={selectedSize} onClickProductSize={onClickProductSize} onClickIncrementQuantity={onClickIncrementQuantity} onClickDecrementQuantity={onClickDecrementQuantity} />}
      </Layout>
    </Page>
  );
}