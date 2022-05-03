import React from "react";
import { Link } from "react-router-dom";

const FilterWrapper = () => {
  return (
      <div className="row">
        <div className="mb-20 col__20">
        <div className="product-filter">
          <h5>Color</h5>
          <ul className="widget-nav-list">
            <li>
              <Link to="#">
                <span className="swatch-color black"></span> Black
              </Link>
            </li>
            <li>
              <Link to="#">
                <span className="swatch-color green"></span> Green
              </Link>
            </li>
            <li>
              <Link to="#">
                <span className="swatch-color grey"></span> Grey
              </Link>
            </li>
            <li>
              <Link to="#">
                <span className="swatch-color red"></span> Red
              </Link>
            </li>
            <li>
              <Link to="#">
                <span className="swatch-color white"></span> White
              </Link>
            </li>
            <li>
              <Link to="#">
                <span className="swatch-color yellow"></span> Yellow
              </Link>
            </li>
          </ul>
        </div>
        </div>

      <div className=" mb-20 col__20">
        <div className="product-filter">
          <h5>Size</h5>
          <ul className="widget-nav-list">
            <li>
              <Link to="#">Large</Link>
            </li>
            <li>
              <Link to="#">Medium</Link>
            </li>
            <li>
              <Link to="#">Small</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className=" mb-20 col__20">
        <div className="product-filter">
          <h5>Price</h5>
          <ul className="widget-nav-list">
            <li>
              <Link to="#">$0.00 - $20.00</Link>
            </li>
            <li>
              <Link to="#">$20.00 - $40.00</Link>
            </li>
            <li>
              <Link to="#">£40.00 - £50.00</Link>
            </li>
            <li>
              <Link to="#">£50.00 - £60.00</Link>
            </li>
            <li>
              <Link to="#">£60.00 +</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className=" mb-20 col__20">
        <div className="product-filter">
          <h5>Categories</h5>
          <ul className="widget-nav-list">
            <li>
              <Link to="#">All</Link>
            </li>
            <li>
              <Link to="#">Accessories</Link>
            </li>
            <li>
              <Link to="#">Chair</Link>
            </li>
            <li>
              <Link to="#">Decoration</Link>
            </li>
            <li>
              <Link to="#">Furniture</Link>
            </li>
            <li>
              <Link to="#">Table</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className=" mb-20 col__20">
        <div className="product-filter">
          <h5>Tags</h5>
          <div className="tagcloud">
            <Link to="#" className="selected">
              All
            </Link>
            <Link to="#" className="">
              Accesssories
            </Link>
            <Link to="#" className="">
              Box
            </Link>
            <Link to="#" className="">
              chair
            </Link>
            <Link to="#" className="">
              Deco
            </Link>
            <Link to="#" className="">
              Furniture
            </Link>
            <Link to="#" className="">
              Glass
            </Link>
            <Link to="#" className="">
              Pottery
            </Link>
            <Link to="#" className="">
              Table
            </Link>
          </div>
        </div>
      </div>
      </div>

  );
};

export default FilterWrapper;
