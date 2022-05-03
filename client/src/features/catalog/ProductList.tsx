import { useEffect } from "react";
import { Product } from "../../app/models/product";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { fetchProductsAsync } from "./catalogSlice";
import ProductCard from "./ProductCard";
interface Props {
  products: Product[];
}

const ProductList = ({ products }: Props) => {
  const { productsLoaded } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!productsLoaded) dispatch(fetchProductsAsync());
  }, [dispatch, productsLoaded]);

  if (!productsLoaded) return <p>Loading...</p>;

  return (
    <>
      <div className="row">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
      </div>
    </>
  );
};

export default ProductList;