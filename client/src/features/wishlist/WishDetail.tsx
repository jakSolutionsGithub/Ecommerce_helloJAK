import React from "react";
import { Link } from "react-router-dom";

const WishDetail = () => {
  return (
    <tr>
      <td className="product-remove">
        <Link to="#">
          <i className="icon-cross2"></i>
        </Link>
      </td>
      <td className="product-img">
        <Link to="#">
          <img src="assets/images/product/small/cart-01.webp" alt="" />
        </Link>
      </td>
      <td className="product-name">
        <Link to="#">Plant pots</Link>
      </td>
      <td className="product-price">
        <span className="amount">$17.00</span>
      </td>
      <td className="product-stock-status">
        <p>In Stock</p>
      </td>
      <td className="product-wishlist-cart">
        <Link to="#">add to cart</Link>
      </td>
    </tr>
  );
};

export default WishDetail;
