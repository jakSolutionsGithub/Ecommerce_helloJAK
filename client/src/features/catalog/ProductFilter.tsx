import { useEffect, useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";
import FilterWrapper from "./FilterWrapper";

const ProductFilter = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log(isVisible);
  }, [isVisible]);

  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="shop-toolbar__items shop-toolbar__item--left">
            <div className="shop-toolbar__item shop-toolbar__item--result">
              <p className="result-count"> Showing 1–9 of 21 results</p>
            </div>

            <div className="shop-toolbar__item shop-short-by">
              <ul>
                <li>
                  <Link to="#">
                    Sort by <i className="fa fa-angle-down angle-down"></i>
                  </Link>
                  <ul>
                    <li className="active">
                      <Link to="#">Default sorting</Link>
                    </li>
                    <li>
                      <Link to="#">Sort by popularity</Link>
                    </li>
                    <li>
                      <Link to="#">Sort by average rating</Link>
                    </li>
                    <li>
                      <Link to="#">Sort by latest</Link>
                    </li>
                    <li>
                      <Link to="#">Sort by price: low to high</Link>
                    </li>
                    <li>
                      <Link to="#">Sort by price: high to low</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="shop-toolbar__items shop-toolbar__item--right">
            <div className="shop-toolbar__items-wrapper">
              <div className="shop-toolbar__item">
                {/* <ul
                  className="nav toolber-tab-menu justify-content-start"
                  role="tablist"
                >
                  <li className="tab__item nav-item active">
                    <a
                      className="nav-link"
                      data-bs-toggle="tab"
                      href="#tab_columns_01"
                      role="tab"
                    >
                      <img
                        src="/medias/images/svg/column-03.svg"
                        className="img-fluid"
                        alt="Columns 03"
                      />
                    </a>
                  </li>
                  <li className="tab__item nav-item">
                    <a
                      className="nav-link active"
                      data-bs-toggle="tab"
                      href="#tab_columns_02"
                      role="tab"
                    >
                      <img
                        src="/medias/images/svg/column-04.svg"
                        className="img-fluid"
                        alt="Columns 03"
                      />{" "}
                    </a>
                  </li>
                  <li className="tab__item nav-item">
                    <a
                      className="nav-link"
                      data-bs-toggle="tab"
                      href="#tab_columns_03"
                      role="tab"
                    >
                      <img
                        src="medias/images/svg/column-05.svg"
                        className="img-fluid"
                        alt="Columns 03"
                      />{" "}
                    </a>
                  </li>
                </ul> */}
              </div>
              <div className="shop-toolbar__item shop-toolbar__item--filter ">
                <Button
                  className="shop-filter-active"
                  onClick={() => setIsVisible(!isVisible)}
                  aria-controls="test1"
                  aria-expanded={isVisible}
                >
                  Filter<i className="icon-plus"></i>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Collapse in={isVisible}>
        <div id="test1" className="product-filter-wrapper">
          <FilterWrapper />
        </div>
      </Collapse>
    </>
  );
};

export default ProductFilter;
