import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { fetchProductsAsync, productSelectors } from "./catalogSlice";
import ProductList from "./ProductList";
import ProductFilter from "./ProductFilter";
import { Link } from "react-router-dom";

const Catalog = () => {
  const products = useAppSelector(productSelectors.selectAll);
  const { productsLoaded } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!productsLoaded) dispatch(fetchProductsAsync());
  }, [productsLoaded, dispatch]);

  return (
    <>
    <div className="breadcrumb-area">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="row breadcrumb_box  align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-6 text-center text-sm-start">
                        <h2 className="breadcrumb-title">Catalog</h2>
                    </div>
                    <div className="col-lg-6  col-md-6 col-sm-6">
                        
                        <ul className="breadcrumb-list text-center text-sm-end">
                            <li className="breadcrumb-item"><Link to="/catalog">Home</Link></li>
                            <li className="breadcrumb-item active">Shop</li>
                        </ul>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
      <div id="main-wrapper">
        <div className="site-wrapper-reveal border-bottom">
          <div className="product-wrapper section-space--ptb_120">
            <div className="container">
              <ProductFilter />
              <div className="tab-content">
                <ProductList products={products} />
                <div className="paginatoin-area">
                  <div className="row">
                    <div className="col-lg-12">
                      <ul className="pagination-box">
                        <li>
                          <Link to="#" className="Previous">
                            <i className="icon-chevron-left"></i>
                          </Link>
                        </li>
                        <li className="active">
                          <Link to="#">1</Link>
                        </li>
                        <li>
                          <Link to="#">2</Link>
                        </li>
                        <li>
                          <Link to="#">3</Link>
                        </li>
                        <li>
                          <Link to="#" className="Next">
                            <i className="icon-chevron-right"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
