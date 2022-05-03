import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { fetchProductsAsync, productSelectors } from "./catalogSlice";
import ProductList from "./ProductList";
import ProductFilter from "./ProductFilter";

const Catalog = () => {
  const products = useAppSelector(productSelectors.selectAll);
  const { productsLoaded } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!productsLoaded) dispatch(fetchProductsAsync());
  }, [productsLoaded, dispatch]);

  return (
    <>
      <div id="main-wrapper">
        <div className="site-wrapper-reveal border-bottom">
          <div className="product-wrapper section-space--ptb_120">
            <div className="container">
              <ProductFilter />
              <div className="tab-content">
                <ProductList products={products} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
