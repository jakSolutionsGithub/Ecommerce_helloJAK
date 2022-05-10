import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import {
  setProductParams,
} from "./catalogSlice";
import ProductList from "./ProductList";
import ProductFilter from "./ProductFilter";
import { Link } from "react-router-dom";

const Catalog = () => {
  const { productParams } = useAppSelector(
    (state) => state.catalog
  );
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState(productParams.SearchTerm);

  <li
    className="breadcrumb-item"
    onChange={() => {
      setSearchTerm("");
      debouncedSearch();
    }}
  >
    <Link to="/catalog">Home</Link>
  </li>;
  const debouncedSearch = () => {
    dispatch(setProductParams({ SearchTerm: searchTerm }));
  };
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
                    <li
                      className="breadcrumb-item"
                      onClick={() => {
                        setSearchTerm("");
                        debouncedSearch();
                      }}
                    >
                      <Link to="/catalog">Home</Link>
                    </li>
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
                <ProductList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
